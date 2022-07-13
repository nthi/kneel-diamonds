
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { Metals } from "./Metals.js"
import { addCustomOrder } from "./database.js"

//when customer clicks "Create custom order button," we need to store their choices permanently. Use customOrder state and addCustomOrder to click event
document.addEventListener(
    "click",
    (event) => {
        const itemclicked = event.target
        if (itemclicked.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                <section>${Metals()}</section>
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                <section>${DiamondSizes()}</section>
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                <section>${JewelryStyles()}</section>
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}

