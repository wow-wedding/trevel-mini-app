import React from "react"
import Cart from "../Cart/Cart";
import style from "../Cart/Cart.module.css"

const Main = () => {

    let turbd = [
        { title: "Турция",
            img: "https://avatars.mds.yandex.net/i?id=c591b5560647da07059e989a5d89885d_l-3838812-images-thumbs&n=13",
            name: "Rixos 5",
            price: 300000,
        },
        { title: "Италия",
            img: "https://i.pinimg.com/originals/46/d8/9b/46d89bc2eccac662a33716a0d198fea0.jpg",
            name: "Carlton 5",
            price: 500000,
        },
        { title: "Швейцария",
            img: "https://avatars.mds.yandex.net/i?id=720e56cb57d900573c4f0e826c9c39cf_l-9211032-images-thumbs&n=13",
            name: "Pullman",
            price: 700000,
        },
        { title: "Дубай",
            img: "https://avatars.mds.yandex.net/i?id=92dd7032e8950e02d2d00206e635d6ca_l-4447866-images-thumbs&n=13",
            name: "OZ",
            price: 350000,
        },
    ]

    let turItem = turbd.map ( (i) => <Cart item={i}/>)

    return (
        <div className={style.cartitem}>
            {turItem}
        </div>
    )
}

export default Main;