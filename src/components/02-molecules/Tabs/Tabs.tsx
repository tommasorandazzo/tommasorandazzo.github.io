interface Tab {
  link: string,
  title: string,
}

export default ({ title, tabs }: { title: string, tabs: Tab[] }) => {
  return (
    <div>
      {title && (<h2>{title}</h2>)}
      <ul>
        {tabs.map(tab => (
          <li>
            <a href={tab.link}>{tab.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
