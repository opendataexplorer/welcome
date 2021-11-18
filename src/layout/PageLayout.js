import { MDXProvider } from '@mdx-js/react'

import * as PageDesign from './PageDesign'

export default function PageLayout({children}) {
    return(
        <MDXProvider 
            components={{
                h1: PageDesign.H1
            }}>
            {children}
        </MDXProvider>
    )
}