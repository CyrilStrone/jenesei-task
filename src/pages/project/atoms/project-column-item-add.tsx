import "../styles/project-column-item-add.css";

interface IProjectColumnItemAdd {
    onClick: () => void
    title:string
}
export const ProjectColumnItemAdd = (props: IProjectColumnItemAdd) => {
    return (
        <div className="ProjectColumnItemAdd" onClick={props.onClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_4_62" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_4_62)">
                    <path d="M11 13H6C5.71667 13 5.47917 12.9042 5.2875 12.7125C5.09583 12.5208 5 12.2833 5 12C5 11.7167 5.09583 11.4792 5.2875 11.2875C5.47917 11.0958 5.71667 11 6 11H11V6C11 5.71667 11.0958 5.47917 11.2875 5.2875C11.4792 5.09583 11.7167 5 12 5C12.2833 5 12.5208 5.09583 12.7125 5.2875C12.9042 5.47917 13 5.71667 13 6V11H18C18.2833 11 18.5208 11.0958 18.7125 11.2875C18.9042 11.4792 19 11.7167 19 12C19 12.2833 18.9042 12.5208 18.7125 12.7125C18.5208 12.9042 18.2833 13 18 13H13V18C13 18.2833 12.9042 18.5208 12.7125 18.7125C12.5208 18.9042 12.2833 19 12 19C11.7167 19 11.4792 18.9042 11.2875 18.7125C11.0958 18.5208 11 18.2833 11 18V13Z" fill="#49454E" />
                </g>
            </svg>
            <div className="ProjectColumnItemAdd__Title">
                {props.title}
            </div>
            <svg className="ProjectColumnItemAdd__RightIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_4_124" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_4_124)">
                    <path d="M7 13H14C14.2833 13 14.5208 12.9042 14.7125 12.7125C14.9042 12.5208 15 12.2833 15 12C15 11.7167 14.9042 11.4792 14.7125 11.2875C14.5208 11.0958 14.2833 11 14 11H7C6.71667 11 6.47917 11.0958 6.2875 11.2875C6.09583 11.4792 6 11.7167 6 12C6 12.2833 6.09583 12.5208 6.2875 12.7125C6.47917 12.9042 6.71667 13 7 13ZM7 10H14C14.2833 10 14.5208 9.90417 14.7125 9.7125C14.9042 9.52083 15 9.28333 15 9C15 8.71667 14.9042 8.47917 14.7125 8.2875C14.5208 8.09583 14.2833 8 14 8H7C6.71667 8 6.47917 8.09583 6.2875 8.2875C6.09583 8.47917 6 8.71667 6 9C6 9.28333 6.09583 9.52083 6.2875 9.7125C6.47917 9.90417 6.71667 10 7 10ZM4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM4 18H20V6H4V18Z" fill="#49454E" />
                </g>
            </svg>
        </div>
    );
};
