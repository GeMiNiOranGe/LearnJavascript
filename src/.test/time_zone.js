import { getOffsetInSeconds, getOffsetUtcByDst, getTimeZoneAbbreviationByDst } from "../utilities.js";

[
    "Asia/Tokyo",
    "Pacific/Gambier",
    "America/St_Johns",
    "Africa/Abidjan",
    "Africa/Cairo",
    "Indian/Cocos",
    "Asia/Ho_Chi_Minh",
    "Australia/Eucla",
    "Pacific/Chatham",
    "America/New_York",
    "Asia/Beirut",
].forEach(element =>
    console.log([
        getOffsetUtcByDst(element),
        getOffsetInSeconds(element),
        getTimeZoneAbbreviationByDst(element),
    ])
);
