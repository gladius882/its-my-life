import NavigationItem from "./NavigationItem";


const Navigation = () => {
    return (
        <nav className="flex flex-col w-1/8">
            
            <NavigationItem route="/dashboard" text="Dashboard" />
            <NavigationItem route="/settings" text="Settings" />
        </nav>
    )
}

export default Navigation;