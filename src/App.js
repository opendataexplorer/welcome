import PageLayout from './layout/PageLayout'
/* eslint-disable import/no-webpack-loader-syntax */
import JoinUs from '!babel-loader!mdx-loader!./pages/join-us.mdx'

function App() {
  return (
    <div className="m-6">
      <PageLayout>
        <JoinUs />
      </PageLayout>
    </div>
  );
}

export default App;
