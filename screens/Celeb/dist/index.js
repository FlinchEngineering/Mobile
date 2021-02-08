"use strict";
exports.__esModule = true;
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_paper_1 = require("react-native-paper");
var styledComponents_1 = require("../../common/styledComponents");
var HelperService_1 = require("../../services/HelperService");
var CelebScreen = function () {
    var navigate = native_1.useNavigation().navigate;
    var params = native_1.useRoute().params;
    var data = params.data;
    var alias = data.alias, bio = data.bio, craft = data.craft, imageUrl = data.imageUrl, price = data.price, samples = data.samples;
    console.log(samples);
    var hasSamples = (samples === null || samples === void 0 ? void 0 : samples.length) > 0;
    var onBook = function () {
        return navigate('Book', {
            data: data
        });
    };
    return (react_1["default"].createElement(react_native_1.ScrollView, { contentContainerStyle: styles.container },
        react_1["default"].createElement(react_native_1.ImageBackground, { source: { uri: imageUrl }, style: styles.image, blurRadius: 100 },
            react_1["default"].createElement(react_native_1.Image, { source: {
                    uri: imageUrl
                }, style: [styles.img], resizeMode: "contain" })),
        react_1["default"].createElement(react_native_1.View, { style: styles.dets },
            react_1["default"].createElement(react_native_paper_1.FAB, { uppercase: false, icon: "wallet", style: styles.fab, label: "Book", onPress: onBook }),
            react_1["default"].createElement(react_native_1.View, { style: styles.label },
                react_1["default"].createElement(styledComponents_1.MainLabel, null, alias),
                react_1["default"].createElement(styledComponents_1.MiniLabel, null, craft)),
            react_1["default"].createElement(react_native_1.View, { style: styles.bio },
                react_1["default"].createElement(styledComponents_1.Paragraph, { black: true }, bio)),
            hasSamples && react_1["default"].createElement(react_native_1.View, null, samples.map(function (sample, i) {
                return react_1["default"].createElement(react_native_1.Image, { key: i, source: { uri: sample }, height: 100, width: 100, style: { backgroundColor: 'red' } });
            })),
            react_1["default"].createElement(react_native_1.View, { style: styles.price },
                react_1["default"].createElement(styledComponents_1.AltMainLabel, { style: styles.price }, HelperService_1["default"].parseToMoney(price))))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: styledComponents_1.maxHeight * 0.45,
        width: styledComponents_1.maxWidth
    },
    fab: {
        position: 'absolute',
        top: -25,
        right: 12
    },
    label: {
        flex: 1
    },
    bio: {
        flex: 2
        // alignItems:'center'
    },
    dets: {
        paddingHorizontal: 12,
        paddingTop: 50,
        paddingBottom: 12,
        flex: 1
    },
    price: {},
    img: {
        flex: 1,
        width: undefined,
        height: undefined
    }
});
exports["default"] = CelebScreen;
