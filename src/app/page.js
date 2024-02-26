import Banner from "@/components/ui/features/Banner/Banner";
import ListOption from "@/components/ui/features/ListOption/ListOption";
import CustomGradiants from "@/components/ui/features/customGradiants/CustomGradiants";
import CustomGrandiantMobile from "@/components/ui/features/customGradiants/CustomGrandiantMobile";
import ScanCode from "@/components/ui/features/scanCode/ScanCode";
import SwitchVersion from "@/components/ui/features/switchVersion/SwitchVersion";
import ViewHistoricalOrder from "@/components/ui/features/viewHistoricalOrder/ViewHistoricalOrder";
import FixedBottomText from "@/components/ui/fixedBottomText/FixedBottomText";
import FixedTexttop from "@/components/ui/fixedTextTop/fixedTexttop";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden pt-12">
      <div className="flex">
        <div className="flex-1">
          <CustomGradiants />
          <CustomGrandiantMobile />
          <Banner />
          <SwitchVersion />
          <ListOption />
          <ViewHistoricalOrder />
          <ScanCode />
        </div>
      </div>
      <FixedTexttop />
      <FixedBottomText />
    </main>
  );
}
