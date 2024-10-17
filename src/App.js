// ... (previous imports)
import Diagnoses from './pages/Diagnoses';

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Layout>
        <Sidebar />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/clinics" element={<Clinics />} />
              <Route path="/devices" element={<Devices />} />
              <Route path="/diagnoses" element={<Diagnoses />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;