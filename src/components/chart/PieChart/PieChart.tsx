function PieChart() {
  import('@wasm/pkg').then(async (wasm) => {
    (await wasm.default()).console();
  });

  return <div>PieChart</div>;
}

export default PieChart;
