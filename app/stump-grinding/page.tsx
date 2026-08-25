import { ServicePage, serviceMetadata } from "@/components/ServicePage";
import { getService } from "@/lib/business";

const service = getService("stump-grinding")!;

export const metadata = serviceMetadata(service);

export default function Page() {
  return <ServicePage service={service} />;
}
