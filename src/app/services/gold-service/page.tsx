import { redirect } from "next/navigation";

/** Legacy URL: service marketing copy is on `/services` (see `id="services-overview"`). */
export default function GoldServiceLegacyRoute() {
  redirect("/services");
}
