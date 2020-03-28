import React from 'react';

import { GeoMap } from '@nivo/geo';
import { FEATURES } from '../../assets/features';

import './index.css';

const World = () => {
    const data = [
        {
            id: 'AFG',
            value: 965371
        },
        {
            id: 'AGO',
            value: 552173
        },
        {
            id: 'ALB',
            value: 77929
        },
        {
            id: 'ARE',
            value: 975285
        },
        {
            id: 'ARG',
            value: 210196
        },
        {
            id: 'ARM',
            value: 703855
        },
        {
            id: 'ATA',
            value: 974816
        },
        {
            id: 'ATF',
            value: 851098
        },
        {
            id: 'AUT',
            value: 659242
        },
        {
            id: 'AZE',
            value: 627143
        },
        {
            id: 'BDI',
            value: 980539
        },
        {
            id: 'BEL',
            value: 920755
        },
        {
            id: 'BEN',
            value: 463593
        },
        {
            id: 'BFA',
            value: 982734
        },
        {
            id: 'BGD',
            value: 950930
        },
        {
            id: 'BGR',
            value: 663964
        },
        {
            id: 'BHS',
            value: 64811
        },
        {
            id: 'BIH',
            value: 554767
        },
        {
            id: 'BLR',
            value: 128952
        },
        {
            id: 'BLZ',
            value: 657628
        },
        {
            id: 'BOL',
            value: 443039
        },
        {
            id: 'BRN',
            value: 936978
        },
        {
            id: 'BTN',
            value: 312621
        },
        {
            id: 'BWA',
            value: 786175
        },
        {
            id: 'CAF',
            value: 824660
        },
        {
            id: 'CAN',
            value: 1371
        },
        {
            id: 'CHE',
            value: 252084
        },
        {
            id: 'CHL',
            value: 367983
        },
        {
            id: 'CHN',
            value: 120833
        },
        {
            id: 'CIV',
            value: 370637
        },
        {
            id: 'CMR',
            value: 156402
        },
        {
            id: 'COG',
            value: 915744
        },
        {
            id: 'COL',
            value: 637071
        },
        {
            id: 'CRI',
            value: 138237
        },
        {
            id: 'CUB',
            value: 316040
        },
        {
            id: '-99',
            value: 587662
        },
        {
            id: 'CYP',
            value: 676194
        },
        {
            id: 'CZE',
            value: 388638
        },
        {
            id: 'DEU',
            value: 147860
        },
        {
            id: 'DJI',
            value: 662360
        },
        {
            id: 'DNK',
            value: 1583
        },
        {
            id: 'DOM',
            value: 522417
        },
        {
            id: 'DZA',
            value: 133462
        },
        {
            id: 'ECU',
            value: 540148
        },
        {
            id: 'EGY',
            value: 683294
        },
        {
            id: 'ERI',
            value: 518396
        },
        {
            id: 'ESP',
            value: 574306
        },
        {
            id: 'EST',
            value: 881553
        },
        {
            id: 'ETH',
            value: 932854
        },
        {
            id: 'FIN',
            value: 750140
        },
        {
            id: 'FJI',
            value: 254617
        },
        {
            id: 'FLK',
            value: 808746
        },
        {
            id: 'FRA',
            value: 840338
        },
        {
            id: 'GAB',
            value: 100293
        },
        {
            id: 'GBR',
            value: 222705
        },
        {
            id: 'GEO',
            value: 476109
        },
        {
            id: 'GHA',
            value: 328625
        },
        {
            id: 'GIN',
            value: 365958
        },
        {
            id: 'GMB',
            value: 116121
        },
        {
            id: 'GNB',
            value: 820319
        },
        {
            id: 'GNQ',
            value: 116621
        },
        {
            id: 'GRC',
            value: 680597
        },
        {
            id: 'GTM',
            value: 86746
        },
        {
            id: 'GUY',
            value: 915818
        },
        {
            id: 'HND',
            value: 630536
        },
        {
            id: 'HRV',
            value: 550297
        },
        {
            id: 'HTI',
            value: 107064
        },
        {
            id: 'HUN',
            value: 818263
        },
        {
            id: 'IDN',
            value: 249378
        },
        {
            id: 'IND',
            value: 117214
        },
        {
            id: 'IRL',
            value: 486679
        },
        {
            id: 'IRN',
            value: 502723
        },
        {
            id: 'IRQ',
            value: 745026
        },
        {
            id: 'ISL',
            value: 873340
        },
        {
            id: 'ISR',
            value: 74161
        },
        {
            id: 'ITA',
            value: 62262
        },
        {
            id: 'JAM',
            value: 588278
        },
        {
            id: 'JOR',
            value: 107066
        },
        {
            id: 'JPN',
            value: 887300
        },
        {
            id: 'KAZ',
            value: 939311
        },
        {
            id: 'KEN',
            value: 523975
        },
        {
            id: 'KGZ',
            value: 317348
        },
        {
            id: 'KHM',
            value: 718826
        },
        {
            id: 'OSA',
            value: 208765
        },
        {
            id: 'KWT',
            value: 677690
        },
        {
            id: 'LAO',
            value: 528972
        },
        {
            id: 'LBN',
            value: 270023
        },
        {
            id: 'LBR',
            value: 648935
        },
        {
            id: 'LBY',
            value: 441347
        },
        {
            id: 'LKA',
            value: 17627
        },
        {
            id: 'LSO',
            value: 240364
        },
        {
            id: 'LTU',
            value: 599714
        },
        {
            id: 'LUX',
            value: 949097
        },
        {
            id: 'LVA',
            value: 875115
        },
        {
            id: 'MAR',
            value: 207274
        },
        {
            id: 'MDA',
            value: 86499
        },
        {
            id: 'MDG',
            value: 813642
        },
        {
            id: 'MEX',
            value: 419004
        },
        {
            id: 'MKD',
            value: 250540
        },
        {
            id: 'MLI',
            value: 805894
        },
        {
            id: 'MMR',
            value: 92241
        },
        {
            id: 'MNE',
            value: 171426
        },
        {
            id: 'MNG',
            value: 719630
        },
        {
            id: 'MOZ',
            value: 697411
        },
        {
            id: 'MRT',
            value: 630518
        },
        {
            id: 'MWI',
            value: 416997
        },
        {
            id: 'MYS',
            value: 34840
        },
        {
            id: 'NAM',
            value: 684723
        },
        {
            id: 'NCL',
            value: 359327
        },
        {
            id: 'NER',
            value: 41708
        },
        {
            id: 'NGA',
            value: 257913
        },
        {
            id: 'NIC',
            value: 86259
        },
        {
            id: 'NLD',
            value: 692652
        },
        {
            id: 'NOR',
            value: 764960
        },
        {
            id: 'NPL',
            value: 270430
        },
        {
            id: 'NZL',
            value: 724536
        },
        {
            id: 'OMN',
            value: 746512
        },
        {
            id: 'PAK',
            value: 125991
        },
        {
            id: 'PAN',
            value: 206004
        },
        {
            id: 'PER',
            value: 298226
        },
        {
            id: 'PHL',
            value: 198892
        },
        {
            id: 'PNG',
            value: 582920
        },
        {
            id: 'POL',
            value: 376783
        },
        {
            id: 'PRI',
            value: 924622
        },
        {
            id: 'PRT',
            value: 178311
        },
        {
            id: 'PRY',
            value: 269694
        },
        {
            id: 'QAT',
            value: 695660
        },
        {
            id: 'ROU',
            value: 232492
        },
        {
            id: 'RUS',
            value: 183929
        },
        {
            id: 'RWA',
            value: 70657
        },
        {
            id: 'ESH',
            value: 277130
        },
        {
            id: 'SAU',
            value: 884412
        },
        {
            id: 'SDN',
            value: 759780
        },
        {
            id: 'SDS',
            value: 280247
        },
        {
            id: 'SEN',
            value: 39545
        },
        {
            id: 'SLB',
            value: 200662
        },
        {
            id: 'SLE',
            value: 482869
        },
        {
            id: 'SLV',
            value: 577288
        },
        {
            id: 'ABV',
            value: 858138
        },
        {
            id: 'SOM',
            value: 930442
        },
        {
            id: 'SRB',
            value: 50433
        },
        {
            id: 'SUR',
            value: 264360
        },
        {
            id: 'SVK',
            value: 251102
        },
        {
            id: 'SVN',
            value: 521029
        },
        {
            id: 'SWZ',
            value: 161323
        },
        {
            id: 'SYR',
            value: 465481
        },
        {
            id: 'TCD',
            value: 943245
        },
        {
            id: 'TGO',
            value: 656705
        },
        {
            id: 'THA',
            value: 259798
        },
        {
            id: 'TJK',
            value: 438640
        },
        {
            id: 'TKM',
            value: 311137
        },
        {
            id: 'TLS',
            value: 837971
        },
        {
            id: 'TTO',
            value: 195007
        },
        {
            id: 'TUN',
            value: 591834
        },
        {
            id: 'TUR',
            value: 824250
        },
        {
            id: 'TWN',
            value: 252845
        },
        {
            id: 'TZA',
            value: 911752
        },
        {
            id: 'UGA',
            value: 115589
        },
        {
            id: 'UKR',
            value: 165004
        },
        {
            id: 'URY',
            value: 372785
        },
        {
            id: 'USA',
            value: 993231
        },
        {
            id: 'UZB',
            value: 763841
        },
        {
            id: 'VEN',
            value: 630699
        },
        {
            id: 'VNM',
            value: 151228
        },
        {
            id: 'VUT',
            value: 969429
        },
        {
            id: 'PSE',
            value: 725540
        },
        {
            id: 'YEM',
            value: 916132
        },
        {
            id: 'ZAF',
            value: 439457
        },
        {
            id: 'ZMB',
            value: 951394
        },
        {
            id: 'ZWE',
            value: 572346
        },
        {
            id: 'KOR',
            value: 537446
        }
    ];

    return (
        <div className='world'>
            <GeoMap
                width={1000}
                height={500}
                data={data}
                features={FEATURES}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                projectionTranslation={[0.5, 0.5]}
                projectionRotation={[0, 0, 0]}
                fillColor='#eeeeee'
                borderWidth={0.5}
                borderColor='#333333'
                enableGraticule={true}
                graticuleLineColor='#666666'
            />
        </div>
    );
};

export default World;
