import { Helmet } from 'react-helmet';
import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

interface PageProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: React.ReactNode;
  title: string;
}

function Page({ children, title, ...rest }: PageProps) {
  return (
    <div {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
}

export type { PageProps };
export default Page;
