import Image from "next/image";
import styles from "./page.module.css";
import ProductListingLogic from "@/components/ProductListing/ProductListingLogic";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProductListingLogic />
    </main>
  );
}
