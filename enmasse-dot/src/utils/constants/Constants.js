import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Avatar from '@mui/material/Avatar';
import Settings from '@mui/icons-material/Settings';
import { MdFormatListBulleted } from 'react-icons/md';
import { MdGroupAdd } from 'react-icons/md';

export const TOKEN =
    'pk.eyJ1IjoiZGF5YW5hZWR3aW4iLCJhIjoiY2xqbnpmcW91MDl0dDNkcGp3eDJ4cGE5cSJ9.q2SWsgW4OxyhoosSjKsANQ';
export const transparentMapStyle =
    'mapbox://styles/dayanaedwin/cljoaqv3800kl01pj2o567vfj';
export const localMapStyle = 'mapbox://styles/dayanaedwin/cljwfg4zh022b01pq8n4kgcxw';

export const transparentMapStyleV2 = 'mapbox://styles/dayanaedwin/clk9irdd300pf01pd0l8q9uxx';

export const mapStyle = 'mapbox://styles/dayanaedwin/cljoaqv3800kl01pj2o567vfj';

export const API_KEY = 'RGb6AwVV6Tr7NvKYBvBPJH1Qi2nDcVS0egmZgUQX8nM';

export const revgeocodeURL = 'https://revgeocode.search.hereapi.com/v1/revgeocode?at=';

export const options = [
    { key: 0, label: 'All', type: 'radius-all' },
    { key: 1, label: 'Healthcare', type: 'radius-edu' },
    { key: 2, label: 'Education', type: 'radius-agri' },
    { key: 3, label: 'Agri Markets', type: 'radius-health' },
    { key: 4, label: 'Financial', type: 'radius-fin' },
];

export const countryData = [
    {
        country: 'India',
        population: '1.39B',
        annualAverageIncome: '$7500',
        entrepreneurialHouseholds: '200M',
        totalAddressableMarket: '$1 Trillion',
        button: 'Explore More'
    },
    {
        country: 'Central & South America',
        population: '1.39B',
        annualAverageIncome: '$7500',
        entrepreneurialHouseholds: '200M',
        totalAddressableMarket: '$1 Trillion',
        button: 'Explore More'
    },
    {
        country: 'South East Asia',
        population: '1.39B',
        annualAverageIncome: '$7500',
        entrepreneurialHouseholds: '200M',
        totalAddressableMarket: '$1 Trillion',
        button: 'Explore More'
    },
    {
        country: 'Africa',
        population: '1.39B',
        annualAverageIncome: '$7500',
        entrepreneurialHouseholds: '200M',
        totalAddressableMarket: '$1 Trillion',
        button: 'Explore More'
    }
];

export const sidebarData = [
    {
        index: 0,
        icon: <PersonIcon />,
        option: 'Profile'
    },
    {
        index: 1,
        icon: <SettingsIcon />,
        option: 'Settings'
    },
    {
        index: 2,
        icon: <GroupAddIcon />,
        option: 'Invite'
    }
];

export const inviteData = [
    {
        id: '0',
        name: 'JAY',
        email: 'jay@gmail.com',
        role: 'Admin',
        company: 'Enmasse',
        companyType: 'Enmasse'
      },
      {
        id: '1',
        name: 'SUDHA',
        email: 'sudha@gmail.com',
        role: 'Admin',
        company: 'Tarento',
        companyType: 'Enmasse'
      },
      {
        id: '2',
        name: 'DAYANA',
        email: 'dayana@gmail.com',
        role: 'Admin',
        company: 'Enmasse',
        companyType: 'Enmasse'
      },
      {
        id: '3',
        name: 'ILMA',
        email: 'ilma@gmail.com',
        role: 'Admin',
        company: 'Enmasse',
        companyType: 'Business'
      },
      {
        id: '4',
        name: 'Hashini',
        email: 'hashini@gmail.com',
        role: 'Admin',
        company: 'Enmasse',
        companyType: 'Enmasse'
      },
      {
        id: '5',
        name: 'Aditya',
        email: 'aditya@gmail.com',
        role: 'Admin',
        company: 'Tarento',
        companyType: 'Enmasse'
      },
      {
        id: '6',
        name: 'Shakshi',
        email: 'shakshi@gmail.com',
        role: 'Admin',
        company: 'Enmasse',
        companyType: 'Enmasse'
      },
];

export const accountMenuItems = [
    {
        key: 0,
        text: "Profile name",
        icon: <Avatar
            sx={{ width: 28, height: 28, fontSize: 15 }}
        >
            M
        </Avatar>
    },
    {
        key: 1,
        text: "Settings",
        icon: <Settings fontSize="small" />
    },
    {
        key: 3,
        text: "Admin Directory",
        icon: <MdFormatListBulleted fontSize="small" />
    },
    {
        key: 2,
        text: "Invite",
        icon: <MdGroupAdd fontSize="small" />
    },
];

export const languages = [
    {
        key: 'EN',
        value: 'English'
    },
    {
        key: 'GE',
        value: 'German'
    },
    {
        key: 'JP',
        value: 'Japanese'
    }
];

export const currency = [
    {
        key: 'INR',
        value: 'INR'
    },
    {
        key: 'EURO',
        value: 'Euro'
    },
    {
        key: 'YEN',
        value: 'Japanese Yen'
    }
];

export const location = [
    {
        key: 'IND',
        value: 'India'
    },
    {
        key: 'GE',
        value: 'Germany'
    },
    {
        key: 'JP',
        value: 'Japan'
    }
];

export const collectiveCircleLayerProps = {
    sourceId: 'geojsonsource-all-circle',
    layerId: 'all-map-circle-layer',
    circleColor: '#FFFFFF',
    circleStrokeWidth: 1,
    circleStrokeColor: '#FFFFFF'
};

export const coreSolutionCircleLayerProps = {
    sourceId: 'geojsonsource-circle',
    layerId: 'map-circle-layer',
    circleColor: '#FFFFFF',
    circleStrokeWidth: 1,
    circleStrokeColor: '#FFFFFF'
}

export const company = [
    {
        key: 'Enmasse',
        value: 'Enmasse'
    },
    {
        key: 'Sarvagram',
        value: 'Sarvagram'
    },
    {
        key: 'Leadschool',
        value: 'Leadschool'
    },
    {
        key: 'Samunnati',
        value: 'Samunnati'
    }
];

export const companyType = [
    {
        key: 'Enmasse',
        value: 'Enmasse'
    },
    {
        key: 'Investor',
        value: 'Investor'
    },
    {
        key: 'Business',
        value: 'Business'
    }
];

export const profileData = {
    name: 'Kartik Parija',
    email: 'kartik@enmasse.world',
    phone: 76564545,
    designation: 'Manager',
    company: 'Enmasse',
    country: 'India',
    role: 'Admin'
};

export const headers = ['State', 'Entrepreneurial Households', 'Median Annual EH Spend on Core Solutions', 'Median Annual EH Income', 'EM Rank']

export const dashboardTableData = [
    {
        state: 'Andhra Pradesh',
        households: '84 Million',
        medianAnnualEHSpend: '$5400',
        medianAnnualEHIncome: '$5400',
        EMrank: '8'
    },
    {
        state: 'Andhra Pradesh',
        households: '84 Million',
        medianAnnualEHSpend: '$5400',
        medianAnnualEHIncome: '$5400',
        EMrank: '8'
    },
    {
        state: 'Arunachal Pradesh',
        households: '135 Million',
        medianAnnualEHSpend: '$7000',
        medianAnnualEHIncome: '$7000',
        EMrank: '3'
    },
    {
        state: 'Bihar',
        households: '90 Million',
        medianAnnualEHSpend: '$5500',
        medianAnnualEHIncome: '$5500',
        EMrank: '7'
    },
    {
        state: 'Chhattisgarh',
        households: '81 Million',
        medianAnnualEHSpend: '$5200',
        medianAnnualEHIncome: '$5200',
        EMrank: '9'
    },
    {
        state: 'Goa',
        households: '60 Million',
        medianAnnualEHSpend: '$5200',
        medianAnnualEHIncome: '$5200',
        EMrank: '10'
    },
    {
        state: 'Gujarat',
        households: '130 Million',
        medianAnnualEHSpend: '$6010',
        medianAnnualEHIncome: '$6010',
        EMrank: '5'
    },
];

export const dashboardCardInfo = [
    {
        title: "Total Population",
        value: '1.4 Billion',
    },
    {
        title: "Total Households",
        value: '285 Million',
    },
    {
        title: "Number of EH",
        value: '200 Million',
    },
    {
        title: "Median Annual EH Household Spend",
        value: '$5000',
    },
    {
        title: "Total Addressable Market",
        value: '$1 Trillion',
    },
];

export const bubbleData = {
    type: 'node',
    name: "parent",
    value: 2300,
    children: [
        { type: 'leaf', name: "Healthcare", value: 10, color: '#007CC3' },
        { type: 'leaf', name: "Agri Market", value: 30, color: '#367A2B' },
        { type: 'leaf', name: "Education", value: 15, color: '#F47A1F' },
        { type: 'leaf', name: "Financial", value: 45, color: '#00529B' }
    ]
}