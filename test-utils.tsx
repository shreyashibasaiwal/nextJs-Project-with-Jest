import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
// import {ThemeProvider} from 'my-ui-lib'
// import {TranslationProvider} from 'my-i18n-lib'
import { MDXProvider, useMDXComponents } from '@mdx-js/react'
import Demo from '../src/pages/demo.mdx'
// import defaultStrings from 'i18n/en-x-default'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        // <ThemeProvider theme="light">
        //     <TranslationProvider messages={defaultStrings}>
        //         {children}
        //     </TranslationProvider>
        // </ThemeProvider>
        <MDXProvider components={useMDXComponents()}>
            <Demo />
        </MDXProvider>
    )
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }