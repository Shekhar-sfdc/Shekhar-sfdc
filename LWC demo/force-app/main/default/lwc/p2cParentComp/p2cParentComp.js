import { LightningElement } from 'lwc';

export default class P2cParentComp extends LightningElement {
    hur="Hurray child component loaded";
    succes ="succesfully";
    valueHandler = 20;
    carouselArr=[
        {src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-model-unselect-gallery-2-202207_GEO_EMEA?wid=2560&hei=1440&fmt=p-jpg",
        header:"Frist Card",
        descrpiton:"This MacBook Air 15"
        },
        {src:"https://www.apple.com/v/ipad-pro/am/images/overview/hero/hero_startframe__gck1t26hu3am_large.jpg",
        header:"Second Card",
        descrpiton:"This card displaying I pad"
        },
        {src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-model-unselect-gallery-2-202207_GEO_EMEA?wid=2560&hei=1440&fmt=p-jpg",
        header:"Third Card",
        descrpiton:"This card displaying Iphone"
        },
        {src:"https://www.apple.com/v/apple-watch-se/k/images/overview/fast/fast__fzr175f10q6a_large.jpg",
        header:"fourth Card",
        descrpiton:"This card displaying apple watch"
        }
    ]

    changeaHandler(event){
        this.valueHandler= event.target.value;

    }
    resetHandle(){
        this.template.querySelector('c-p2c-slider').resetHandler();
    }
}