
type NavigationItemProps = {
    route: string,
    text: string
}

const NavigationItem = ({
    route, text
}: NavigationItemProps) => {
    return (
        <div className="">
            <a href={route} className="bg-[#ffffff] color-black hover:bg-[#4880FF] py-3">
                {text}
            </a>
        </div>
    )
}

export default NavigationItem;