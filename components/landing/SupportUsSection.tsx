"use client";

import { BaseIcon } from "@/components/icons/Base";
import { ArbitrumIcon } from "@/components/icons/Arbitrum";
import { OptimismIcon } from "@/components/icons/Optimism";
import { EthereumIcon } from "@/components/icons/Ethereum";
import { GnosisIcon } from "@/components/icons/Gnosis";
import { QRCodeCanvas } from "qrcode.react";

const address = "0xDA74B77BA4BE36619b248088214D807A581292C4";

export default function SupportUsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold  mb-12">Find this tool useful?</h2>
        <h2 className="text-xl  mb-4">Support us!</h2>
        <div className="flex justify-center space-x-2 mb-4">
          <EthereumIcon width={24} height={24} />
          <GnosisIcon width={24} height={24} />
          <OptimismIcon width={24} height={24} />
          <ArbitrumIcon width={24} height={24} />
          <BaseIcon width={24} height={24} />
        </div>
        <span className="text-md break-all">{address}</span>
        <div className="flex justify-center mt-4">
          <QRCodeCanvas
            value={address}
            size={100}
            bgColor="transparent"
            fgColor="rgb(27 39 59)"
          />
        </div>
      </div>
    </section>
  );
}
