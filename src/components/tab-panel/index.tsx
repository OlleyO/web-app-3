interface Props {
  children?: React.ReactNode;
  index: number;
  value: number;
  wrapperClassName?: string;
}

const TabPanel: React.FC<Props> = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      className={other.wrapperClassName}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
};

export const a11yProps = (index: number) => ({
  "aria-controls": `tabpanel-${index}`,
  id: `tab-${index}`,
});

export default TabPanel;
