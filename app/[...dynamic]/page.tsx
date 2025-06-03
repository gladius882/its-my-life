// app/[...dynamic]/page.tsx
import { notFound } from "next/navigation";
import { findPageComponent } from "@/core/pluginManager";

export default async function DynamicPage({ params }: { params: { dynamic: string[] } }) {
    const awaitedParams = await params
    const slug = "/" + (awaitedParams.dynamic || []).join("/");
    const loader = await findPageComponent(slug);

    if (!loader) {
        notFound();
    }

    const Component = (await loader()).default;
    return <Component />;
}
