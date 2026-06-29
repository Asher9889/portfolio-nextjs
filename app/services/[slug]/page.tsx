import { services } from "@/constants/services.constant";
import ServiceDetailPage from "@/features/services/components/ServiceDetailPage";
import { notFound } from "next/navigation";

export default async function ServiceSlugRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage serviceId={slug} />;
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Saurabh Kushwaha`,
    description: service.description,
  };
}
