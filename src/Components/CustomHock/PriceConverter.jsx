const PriceConverter = ({price}) => {
  return (
    new Intl.NumberFormat("de-DE", { style: "currency", currency: "BDT", maximumFractionDigits:"1" }).format(
        price,)
  )
}

export default PriceConverter
