import cssLogo from "../assets/logo_css.png"
import htmlLogo from "../assets/logo_html.png"
import brushLogo from "../assets/logo_brush.png"
import { v4 as uuidv4} from "uuid"

const data = [

    {
        id:uuidv4(),
        image: cssLogo,
        path:"css",
        header:"CSS3 Styling",
        content:"CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed."
    },
    {
        id:uuidv4(),
        path:"html",
        image: htmlLogo,
        header:"HTML5 Markup",
        content:"HTML is the standard markup language for Web pages. With HTML you can create your own Website."
    },
    {
        id:uuidv4(),
        image: brushLogo,
        path:"design",
        header:"Graphic Design",
        content:"Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques,"
    }
    
]

export default data;