import React from 'react'
import { Advisor } from "../components/Advisor"
import { BannerMessage } from "../components/BannerMessage"
import { Payments } from "../components/Payments"
import { Product } from "../components/Product"
import { SubHeader } from "../components/SubHeader"

export const Accounts = () => {
  return (
    <div className="AccountsPageContainer">
      <div className="AccountsPage">
        <BannerMessage />
        <Payments />
        <SubHeader text="grow" />
        <Product />
        <SubHeader text="my financial advisor" />
        <Advisor />
      </div>
    </div>
  )
}
