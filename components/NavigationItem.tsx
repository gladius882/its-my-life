
type NavigationItemProps = {
    route: string,
    text: string
}

const NavigationItem = ({
    route, text
}: NavigationItemProps) => {
    return (
        <div>
            <a href={route}>
                {text}
            </a>
        </div>
    )
}

export default NavigationItem;