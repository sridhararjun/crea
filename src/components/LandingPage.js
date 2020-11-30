import React, { Component } from "react";
import foyer from '../foyer.jpg';

class LandingPage extends Component {
    state = {};
    render() {
        return (
            <div id="imgMap">
                <img src={foyer} usemap="#image-map"></img>
                <map name="image-map">
                    <area target="_blank" alt="Photo Frame" title="Photo Frame" href="https://www.flipkart.com/mykart-wood-photo-frame/p/itmf6b9amaaxnmmu?pid=PHFF66ZAFE68PN2V&amp;lid=LSTPHFF66ZAFE68PN2VY3XZKK&amp;marketplace=FLIPKART&amp;srno=s_1_1&amp;otracker=search&amp;otracker1=search&amp;fm=SEARCH&amp;iid=bf8c193f-bff2-4660-918b-ae4c01935072.PHFF66ZAFE68PN2V.SEARCH&amp;ppt=sp&amp;ppn=sp&amp;ssid=r9s5urhl0diz3pq81605549279078&amp;qH=5e2b48e7693c8927" coords="1069,319,1716,166,1667,877,1062,693" shape="poly"></area>
                    <area target="_blank" alt="Plate Decors" title="Plate Decors" href="https://www.flipkart.com/swastik-systems-mdf-photo-frame/p/itm0dd66904ef736?pid=PHFFKHZ2NHEU3Y3D&amp;lid=LSTPHFFKHZ2NHEU3Y3DPYH2K7&amp;marketplace=FLIPKART&amp;spotlightTagId=TrendingId_arb%2Frm9%2Fhzf&amp;srno=s_1_2&amp;otracker=search&amp;otracker1=search&amp;fm=SEARCH&amp;iid=bf8c193f-bff2-4660-918b-ae4c01935072.PHFFKHZ2NHEU3Y3D.SEARCH&amp;ppt=sp&amp;ppn=sp&amp;ssid=r9s5urhl0diz3pq81605549279078&amp;qH=5e2b48e7693c8927" coords="514,456,103" shape="circle"></area>
                </map>
            </div>
        )
    }
}

export default LandingPage;