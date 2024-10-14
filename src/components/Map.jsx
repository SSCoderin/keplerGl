// import { useEffect } from "react";
import KeplerGl from "@kepler.gl/components";
import {
    processCsvData,
    processGeojson,
    processRowObject,
} from "@kepler.gl/processors";
import { useDispatch } from "react-redux";
import { addDataToMap } from "@kepler.gl/actions";
// import locatorData from '.';

const Map = () => {
    const dispatch = useDispatch();
    const handler = () => {
        console.log("clicked.....................");
        const data = {
            type: "FeatureCollection",
            features: [
                // {
                //     type: "Feature",
                    // properties: {
                    //     name: "Lafayette (LAFY)",
                    //     code: "LF",
                    //     address: "3601 Deer Hill Road, Lafayette CA 94549",
                    //     entries: "3481",
                    //     exits: "3616",
                    //     latitude: 19.1485289,
                    //     longitude: 77.3191471,
                    // },
                //     geometry: {
                //         type: "Point",
                //         coordinates: [77.3191471, 19.1485289],
                //     },
                // },
                {
                    // type: "Feature",
                    // properties: {
                    //     name: "12th St. Oakland City Center (12TH)",
                    //     code: "12",
                    //     address: "1245 Broadway, Oakland CA 94612",
                    //     entries: "13418",
                    //     exits: "13547",
                    //     latitude: 19.1485289,
                    //     longitude: 77.3191471,
                    // },
                    geometry: {
                        type: "Point",
                        coordinates: [77.3191471, 19.1485289],
                    },
                },
            ],
        };
        // const processedBusRouteData = Processors.processGeojson(data);

        dispatch(
            addDataToMap({
                datasets: [
                    {
                        info: {
                            label: "Station Locations",
                            id: "station_locations",
                        },
                        data: processGeojson(data),
                    },
                ],
                // option: {
                //     centerMap: true,
                //     readOnly: false,
                // },
                config: {
                    version: "v1",
                    config: {
                        visState: {
                            filters: [
                                {
                                    dataId: ["bart-stops-geo-2"],
                                    id: "2ua7g6t8",
                                    name: ["exits"],
                                    type: "range",
                                    value: [6121, 13547],
                                    plotType: {
                                        type: "histogram",
                                    },
                                    animationWindow: "free",
                                    yAxis: null,
                                    view: "side",
                                    speed: 1,
                                    enabled: true,
                                },
                                {
                                    dataId: ["sf-zip-geo"],
                                    id: "kt1fkkbrb",
                                    name: ["ZIP_CODE"],
                                    type: "range",
                                    value: [94103, 94133],
                                    plotType: {
                                        type: "histogram",
                                    },
                                    animationWindow: "free",
                                    yAxis: null,
                                    view: "side",
                                    speed: 1,
                                    enabled: true,
                                },
                            ],
                            layers: [
                                {
                                    id: "ze2p6id",
                                    type: "geojson",
                                    config: {
                                        dataId: "bart-stops-geo",
                                        label: "Bart Stops Geo",
                                        color: [151, 14, 45],
                                        columns: {
                                            geojson: "_geojson",
                                        },
                                        isVisible: true,
                                        visConfig: {
                                            opacity: 0.8,
                                            thickness: 0.5,
                                            strokeColor: [77, 193, 156],
                                            colorRange: {
                                                name: "Global Warming",
                                                type: "sequential",
                                                category: "Uber",
                                                colors: [
                                                    "#5A1846",
                                                    "#900C3F",
                                                    "#C70039",
                                                    "#E3611C",
                                                    "#F1920E",
                                                    "#FFC300",
                                                ],
                                            },
                                            strokeColorRange: {
                                                name: "Global Warming",
                                                type: "sequential",
                                                category: "Uber",
                                                colors: [
                                                    "#5A1846",
                                                    "#900C3F",
                                                    "#C70039",
                                                    "#E3611C",
                                                    "#F1920E",
                                                    "#FFC300",
                                                ],
                                            },
                                            radius: 22.5,
                                            sizeRange: [0, 10],
                                            radiusRange: [0, 50],
                                            heightRange: [0, 500],
                                            elevationScale: 5,
                                            stroked: true,
                                            filled: true,
                                            enable3d: false,
                                            wireframe: false,
                                        },
                                        textLabel: [
                                            {
                                                field: null,
                                                color: [255, 255, 255],
                                                size: 18,
                                                offset: [0, 0],
                                                anchor: "start",
                                                alignment: "center",
                                            },
                                        ],
                                    },
                                    visualChannels: {
                                        colorField: null,
                                        colorScale: "quantile",
                                        sizeField: null,
                                        sizeScale: "linear",
                                        strokeColorField: null,
                                        strokeColorScale: "quantile",
                                        heightField: null,
                                        heightScale: "linear",
                                        radiusField: null,
                                        radiusScale: "linear",
                                    },
                                },
                                {
                                    id: "ho3fgt9",
                                    type: "geojson",
                                    config: {
                                        dataId: "sf-zip-geo",
                                        label: "SF Zip Geo",
                                        color: [136, 87, 44],
                                        columns: {
                                            geojson: "_geojson",
                                        },
                                        isVisible: true,
                                        visConfig: {
                                            opacity: 0.8,
                                            thickness: 0.5,
                                            strokeColor: [255, 254, 213],
                                            colorRange: {
                                                name: "UberPool 8",
                                                type: "diverging",
                                                category: "Uber",
                                                colors: [
                                                    "#213E9A",
                                                    "#3C1FA7",
                                                    "#811CB5",
                                                    "#C318B0",
                                                    "#D01367",
                                                    "#DE0F0E",
                                                    "#EC7007",
                                                    "#F9E200",
                                                ],
                                                reversed: false,
                                            },
                                            strokeColorRange: {
                                                name: "Global Warming",
                                                type: "sequential",
                                                category: "Uber",
                                                colors: [
                                                    "#5A1846",
                                                    "#900C3F",
                                                    "#C70039",
                                                    "#E3611C",
                                                    "#F1920E",
                                                    "#FFC300",
                                                ],
                                            },
                                            radius: 10,
                                            sizeRange: [0, 10],
                                            radiusRange: [0, 50],
                                            heightRange: [0, 500],
                                            elevationScale: 5,
                                            stroked: true,
                                            filled: true,
                                            enable3d: false,
                                            wireframe: false,
                                        },
                                        textLabel: [
                                            {
                                                field: null,
                                                color: [255, 255, 255],
                                                size: 18,
                                                offset: [0, 0],
                                                anchor: "start",
                                                alignment: "center",
                                            },
                                        ],
                                    },
                                    visualChannels: {
                                        colorField: {
                                            name: "ID",
                                            type: "integer",
                                        },
                                        colorScale: "quantile",
                                        sizeField: null,
                                        sizeScale: "linear",
                                        strokeColorField: null,
                                        strokeColorScale: "quantile",
                                        heightField: null,
                                        heightScale: "linear",
                                        radiusField: null,
                                        radiusScale: "linear",
                                    },
                                },
                            ],
                            interactionConfig: {
                                tooltip: {
                                    fieldsToShow: {
                                        "bart-stops-geo": ["name"],
                                        "sf-zip-geo": [
                                            "OBJECTID",
                                            "ZIP_CODE",
                                            "ID",
                                            "name",
                                            "STREETNAME",
                                        ],
                                    },
                                    enabled: true,
                                },
                                brush: {
                                    size: 0.5,
                                    enabled: false,
                                },
                                geocoder: {
                                    enabled: false,
                                },
                            },
                            layerBlending: "normal",
                        },

                        mapStyle: {
                            styleType: "b9tnac",
                            mapStyles: {
                                b9tnac: {
                                    accessToken: null,
                                    custom: true,
                                    icon: "https://api.mapbox.com/styles/v1/heshan0131/cjg0ks54x300a2squ8fr9vhvq/static/-122.3391,37.7922,9,0,0/400x300?access_token=pk.eyJ1IjoidWJlcmRhdGEiLCJhIjoiY2pmc3hhd21uMzE3azJxczJhOWc4czBpYyJ9.HiDptGv2C0Bkcv_TGr_kJw&logo=false&attribution=false",
                                    id: "b9tnac",
                                    label: "label maker",
                                    url: "mapbox://styles/heshan0131/cjg0ks54x300a2squ8fr9vhvq",
                                },
                            },
                        },
                    },
                },
            })
        );
    };

    return (
        <>
            <button onClick={handler}>hello</button>
            <KeplerGl
                id="map-id"
                mapboxApiAccessToken={import.meta.env.VITE_APP_MAPBOX_API_KEY}
                width={1920}
                height={1080}
            />
        </>
    );
};

export default Map;