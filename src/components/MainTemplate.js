import '../css/MainTemplate.scss';

const MainTemplate = ({children}) => {
    return (
        <div className="MainTemplate">
            <div className="app-title"><b>Inventory-Manager</b></div>
                <div className="content">{children}</div>
        </div>
    )
}

export default MainTemplate;