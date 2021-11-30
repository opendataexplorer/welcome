import { MDXProvider } from '@mdx-js/react'

import * as PageDesign from './PageDesign'

export default function PageLayout({ children }) {
    return (
        <div className="max-w-3xl mx-auto p-5">
            <MDXProvider
                components={{
                    h1: PageDesign.h1,
                    h2: PageDesign.h2,
                    h3: PageDesign.h3,
                    p: PageDesign.p,
                    a: PageDesign.a,
                    ol: PageDesign.ol,
                    li: PageDesign.li
                }}
                >
                {children}
            </MDXProvider>
        </div>
    )
}