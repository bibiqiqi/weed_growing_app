/*jshint esversion: 6*/
const testDataOne =
  {
    name: 'Tangerine Dream',
    startDate: '2018-04-15',
    endDate: '',
    strain: 'indica',
    entries: [
      {
        number: 1,
        date: '2018-05-15',
        week: 1,
        phase: 'vegetative',
        wasWatered: true,
        wasFed: false,
        nutrients: {
          floraMicro: '',
          floraGrow: '',
          floraBloom: '',
          caliMagic: ''
        },
        notes: 'Lorem ipsum dolor sit amet, facer laoreet definiebas te pro. Vis cu recusabo gubergren dissentias, ea est natum facilisis, vis.'
      },
      {
        number: 2,
        date: '2018-05-18',
        week: 1,
        phase: 'vegetative',
        wasWatered: false,
        wasFed: true,
        nutrients: {
            floraMicro: '1/4 tsp',
            floraGrow: '1/8 tsp',
            floraBloom: '1/8 tsp',
            caliMagic: '1 tsp'
        },
        notes: ''
      },
      {
        number: 3,
        date: '2018-05-20',
        week: 2,
        phase: 'vegetative',
        wasWatered: true,
        wasFed: false,
        nutrients: {
          floraMicro: '',
          floraGrow: '',
          floraBloom: '',
          caliMagic: ''
        },
        notes: 'Lorem ipsum dolor sit amet, labitur.'
      },
      {
        number: 4,
        date: '2018-05-23',
        week: 2,
        phase: 'vegetative',
        wasWatered: false,
        wasFed: true,
        nutrients:
          {
            floraMicro: '1/2 tsp',
            floraGrow: '1/2 tsp',
            floraBloom: '1/8 tsp',
            caliMagic: '1 tsp'
          },
        notes: ''
      },
      {
        number: 5,
        date: '2018-05-26',
        week: 2,
        phase: 'vegetative',
        wasWatered: true,
        wasFed: false,
        nutrients: {
          floraMicro: '',
          floraGrow: '',
          floraBloom: '',
          caliMagic: ''
        },
        notes: ''
      },
      {
       number: 6,
       date: '2018-05-29',
       week: 3,
       phase: 'flowering',
       wasWatered: false,
       wasFed: true,
       nutrients:
         {
           floraMicro: '1/2 tsp',
           floraGrow: '1/2 tsp',
           floraBloom: '1/2 tsp',
           caliMagic: '1/2 tsp'
         },
       notes: ''
     }
   ]
 };

  const testDataTwo =
  {
    name: 'Green Crack',
    startDate: '2018-02-3',
    endDate: '2018-03-01',
    strain: 'sativa',
    entries: [
      {
        number: 1,
        date: '2018-02-5',
        week: 1,
        phase: 'vegetative',
        wasWatered: true,
        wasfed: false,
        nutrients: {
          floraMicro: '',
          floraGrow: '',
          floraBloom: '',
          caliMagic: ''
        },
        notes: 'Lorem ipsum dolor sit amet, facer laoreet definiebas te pro. Vis cu recusabo gubergren dissentias, ea est natum facilisis, vis.'
      },
      {
        number: 2,
        date: '2018-02-10',
        week: 2,
        phase: 'vegetative',
        wasWatered: false,
        wasFed: true,
        nutrients: {
            floraMicro: '1/4 tsp',
            floraGrow: '1/8 tsp',
            floraBloom: '1/8 tsp',
            caliMagic: '1 tsp'
        },
        notes: ''
      },
      {
        number: 3,
        date: '2018-02-14',
        week: 2,
        phase: 'vegetative',
        wasWatered: true,
        wasFed: false,
        nutrients: {
          floraMicro: '',
          floraGrow: '',
          floraBloom: '',
          caliMagic: ''
        },
        notes: 'Lorem ipsum dolor sit amet, labitur.'
      },
      {
        number: 4,
        date: '2018-02-17',
        week: 3,
        phase: 'vegetative',
        wasWatered: false,
        wasFed: true,
        nutrients: 	{
    			floraMicro: "1/2 tsp",
    			floraGrow: "1/2 tsp",
    			floraBloom: "1/2 tsp",
    			caliMagic: "1/2 tsp"
      		},
        notes: ''
      },
      {
        number: 5,
        date: '2018-02-20',
        week: 3,
        phase: 'vegetative',
        wasWatered: true,
        wasFed: false,
        nutrients: {
          floraMicro: '',
          floraGrow: '',
          floraBloom: '',
          caliMagic: ''
        },
        notes: ''
      },
      {
        number: 6,
        date: '2018-02-23',
        week: 4,
        phase: 'flowering',
        wasWatered: false,
        wasFed: true,
        nutrients: 	{
    			floraMicro: "1/2 tsp",
    			floraGrow: "1/4 tsp",
    			floraBloom: "1/2 tsp",
    			caliMagic: "1/2 tsp"
    		},
        notes: ''
      },
      {
        number: 7,
        date: '2018-02-25',
        week: 4,
        phase: 'flowering',
        wasWatered: true,
        wasFed: false,
        nutrients: {
          floraMicro: '',
          floraGrow: '',
          floraBloom: '',
          caliMagic: ''
        },
        notes: 'Lorem ipsum dolor sit amet.'
      },
      {
        number: 8,
        date: '2018-02-27',
        week: 4,
        phase: 'flowering',
        wasWatered: false,
        wasFed: true,
        nutrients: 	{
          floraMicro: "1/2 tsp",
          floraGrow: "1/4 tsp",
          floraBloom: "1/2 tsp",
          caliMagic: "1/2 tsp"
        },
        notes: ''
      },
      {
        number: 9,
        date: '2018-03-01',
        week: 5,
        phase: 'flowering',
        wasWatered: true,
        wasFed: false,
        nutrients: {
          floraMicro: '',
          floraGrow: '',
          floraBloom: '',
          caliMagic: ''
        },
        notes: ''
      }
    ]
  };

  const nutrientSchedule =
  {
  name: 'basic',
  schedule: [
    {
      week: 1,
      phase: 'vegetative',
      stage: 'seeding',
      nutrients: [
        {
          floraMicro: '1/4 tsp'
        },
        {
          floraGrow: '1/4 tsp'
        },
        {
          floraBloom: '1/4 tsp'
        },
        {
          caliMagic: '1 tsp'
        }
      ]
    },
    {
      week: 2,
      phase: 'vegetative',
      stage: 'vegetative',
      nutrients: [
        {
          floraMicro: '1/2 tsp'
        },
        {
          floraGrow: '1/2 tsp'
        },
        {
          floraBloom: '1/2 tsp'
        },
        {
          caliMagic: '1 tsp'
        }
      ]
    },
    {
      week: 3,
      phase: 'vegetative',
      stage: 'vegetative',
      nutrients: [
        {
          floraMicro: '1/2 tsp'
        },
        {
          floraGrow: '1/2 tsp'
        },
        {
          floraBloom: '1/2 tsp'
        },
        {
          caliMagic: '1 tsp'
        }
      ]
    },
    {
      week: 4,
      phase: 'flowering',
      stage: 'transition',
      nutrients: [
        {
          floraMicro: '1 tsp'
        },
        {
          floraGrow: '1 tsp'
        },
        {
          floraBloom: '1 tsp'
        },
        {
          caliMagic: '1/2 tsp'
        }
      ]
    },
    {
      week: 5,
      phase: 'flowering',
      stage: 'early bloom',
      nutrients: [
        {
          floraMicro: '1 tsp'
        },
        {
          floraGrow: '1 tsp'
        },
        {
          floraBloom: '1 tsp'
        },
        {
          caliMagic: '1/2 tsp'
        }
      ]
    },
    {
      week: 6,
      phase: 'flowering',
      stage: 'early bloom',
      nutrients: [
        {
          floraMicro: '1 tsp'
        },
        {
          floraGrow: '1/2 tsp'
        },
        {
          floraBloom: '1 tsp'
        },
        {
          caliMagic: '1/2 tsp'
        }
      ]
    },
    {
      week: 7,
      phase: 'flowering',
      stage: 'mid bloom',
      nutrients: [
        {
          floraMicro: '1 tsp'
        },
        {
          floraGrow: '1/2 tsp'
        },
        {
          floraBloom: '1 1/2 tsp'
        },
        {
          caliMagic: '1/2 tsp'
        }
      ]
    },
    {
      week: 8,
      phase: 'flowering',
      stage: 'mid bloom',
      nutrients: [
        {
          floraMicro: '1 tsp'
        },
        {
          floraGrow: '1/2'
        },
        {
          floraBloom: '1 1/2 tsp'
        },
        {
          caliMagic: '1/2 tsp'
        }
      ]
    },
    {
      week: 9,
      phase: 'flowering',
      stage: 'late bloom',
      nutrients: [
        {
          floraMicro: '1 tsp'
        },
        {
          floraGrow: '0'
        },
        {
          floraBloom: '1 1/2 tsp'
        },
        {
          caliMagic: '1/2 tsp'
        }
      ]
    },
    {
      week: 10,
      phase: 'flowering',
      stage: 'late bloom',
      nutrients: [
        {
          floraMicro: '1/2 tsp'
        },
        {
          floraGrow: '0'
        },
        {
          floraBloom: '1 tsp'
        },
        {
          caliMagic: '1/2 tsp'
        }
      ]
    },
    {
      week: 11,
      phase: 'flowering',
      stage: 'ripen',
      nutrients: [
        {
          floraMicro: '1/2 tsp'
        },
        {
          floraGrow: '0'
        },
        {
          floraBloom: '1 tsp'
        },
        {
          caliMagic: '1/2 tsp'
        }
      ]
    },
    {
      week: 12,
      phase: 'flowering',
      stage: 'flush',
      nutrients: [
        {
          floraMicro: '0'
        },
        {
          floraGrow: '0'
        },
        {
          floraBloom: '0'
        },
        {
          caliMagic: '0'
        }
      ]
    },
    {
      week: 13,
      phase: 'flowering',
      stage: 'flush',
      nutrients: [
        {
          floraMicro: '0'
        },
        {
          floraGrow: '0'
        },
        {
          floraBloom: '0'
        },
        {
          caliMagic: '0'
        }
      ]
    }
  ]
};

module.exports = {testDataOne, testDataTwo, nutrientSchedule};
