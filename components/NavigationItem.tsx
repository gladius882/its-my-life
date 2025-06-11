
type NavigationItemProps = {
    route: string,
    text: string
}

const NavigationItem = ({
    route, text
}: NavigationItemProps) => {
    return (

            <a href={route} className="bg-[#ffffff] color-black hover:bg-[#4880FF] py-2 pl-2 box border-box">
                {text}
            </a>
    )
}

export default NavigationItem;