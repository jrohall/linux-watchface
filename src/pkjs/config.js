const { radiogroup } = require("pebble-clay/src/scripts/components");

module.exports = [

    {
        "type": "header",
        "defaultValue": "Linux Watchface"
    },
    {
        "type": "text",
        "defaultValue": "Choose your distro below:"
    },
    {
        "type": "section",
        "items": [
            {
                "type": "radiogroup",
                "messageKey": "distro",
                "label": "Distro: ",
                "options": [
                    {
                        "label": "Arch",
                        "value": "arch"
                    },
                    {
                        "label": "Fedora",
                        "value": "fedora"
                    },
                    {
                        "label": "Mint",
                        "value": "mint"
                    },
                    {
                        "label": "Ubuntu",
                        "value": "ubuntu"
                    },
                    {
                        "label": "CentOS",
                        "value": "centos"
                    },
                    {
                        "label": "FreeBSD",
                        "value": "freebsd"
                    },
                    {
                        "label": "Debian",
                        "value": "debian"
                    },
                    {
                        "label": "Gentoo",
                        "value": "gentoo"
                    },
                    {
                        "label": "openSUSE",
                        "value": "suse"
                    }
                ]
            }

        ]
    }

];