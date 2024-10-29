export const devicesArr = [{
    deviceId: 1,
    name: 'Device 1',
    type: 'Device type',
    deviceType: 1,
    selected: false,
    deviceTypes: [{
        id: 1,
        name: 'Primary GPS'
    }, {
        id: 2,
        name: 'Secondary GPS'
    },],
    ownDevice: false,
    serialNumber: '',
    uploadedImage: {}
},
{
    deviceId: 2,
    name: 'Device 2',
    type: 'Device type',
    deviceType: 2,
    selected: false,
    deviceTypes: [{
        id: 1,
        name: 'Primary GPS'
    }, {
        id: 2,
        name: 'Secondary GPS'
    },],
    ownDevice: false,
    serialNumber: '',
    uploadedImage: {}
}]

export const subscriptionPlansArr = [{
    subscriptionId: 1,
    planName: 'Just mates',
    amount: 'Free',
    selected: false,
    planDetails: [{
        name: 'Bring your own GPS',
        icon: 'fa fa-map-marker'
    },
    {
        name: 'Mileage reporting to be done by you',
        icon: 'fa fa-tachometer'
    },
    {
        name: 'In-person key handover to guests',
        icon: 'fa fa-lock'
    }],
    addOnSubscription: [],
    addCardDetails: { cardNumber: '', cvc: '', expiry: '' }
},
{
    subscriptionId: 2,
    planName: 'Good mates',
    amount: '$10/month',
    selected: false,
    planDetails: [{
        name: 'Primary GPS included',
        icon: 'fa fa-map-marker'
    },
    {
        name: 'Automated mileage calculations',
        icon: 'fa fa-tachometer'
    },
    {
        name: 'In-person key handover to guests',
        icon: 'fa fa-lock'
    }],
    addOnSubscription: [
        {
            id: '1',
            name: 'BYO secondary GPS - $5/month',
            selected: false,
            enabled: true

        },
        {
            id: 2,
            name: 'BYO secondary GPS - $10/month',
            selected: false,
            enabled: true

        }
    ],
    addCardDetails: { cardNumber: '', cvc: '', expiry: '' }

},
{
    subscriptionId: 3,
    planName: 'Best mates',
    amount: '$30/month',
    selected: false,
    planDetails: [{
        name: 'Keyless access technology',
        icon: 'fa fa-map-marker'

    },
    {
        name: 'Automated mileage calculations',
        icon: 'fa fa-tachometer'
    },
    {
        name: 'Remote handover to guests',
        icon: 'fa fa-lock'

    }],
    addOnSubscription: [
        {
            id: 1,
            name: 'BYO secondary GPS - $5/month',
            selected: false,
            enabled: true
        },
        {
            id: 3,
            name: 'Between trip insurance (Coming soon)',
            selected: false,
            enabled: false
        }
    ],
    addCardDetails: { cardNumber: '', cvc: '', expiry: '' }

},
]

