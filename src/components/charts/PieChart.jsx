import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    'UX/UI',
    'HTML/CSS/JavaScript',
    'Backend',
    'React JS',
    'Vue.js',
    'Agile Development'
  ],
  datasets: [
    {
      label: 'Modules',
      data: [1, 4, 2, 6, 6, 1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]
};

const PieChart = () => {
  const options = {
    responsive: true,
    layout: {
      padding: 0,
      margin: 0
    },
    plugins: {
      legend: {
        display: true,
        position: 'left',
        align: 'center',
        labels: {
          color: '#fff',
          fontSize: 40
        }
      }
    },
    onResize: (chart, size) => {
      console.log(chart);
    }
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;