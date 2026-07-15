import { services } from "@/constants/services.constant";
import DetailHero from "@/features/services/components/detail-hero";
import DetailBody from "@/features/services/components/detail-body";
import DetailCTA from "@/features/services/components/detail-cta";
import { notFound } from "next/navigation";

export default async function ServiceSlugRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug) ?? null;

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-w-bg font-inter">
      <DetailHero service={service} />
      <DetailBody service={service} />
      <DetailCTA />
    </main>
  );
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
