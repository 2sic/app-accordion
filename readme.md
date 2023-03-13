<img src="app-icon.png" align="right" width="200px">

# Accordion4 App for .net CMSs

> This is a [2sxc](https://2sxc.org) App for [DNN ☢️](https://www.dnnsoftware.com/) and [Oqtane 💧](https://www.oqtane.org/)

An accordion app often used to collapse blocks of content - ideal for mobile sites.

| Aspect              | Status | Comments or Version |
| ------------------- | :----: | ------------------- |
| 2sxc                | ✅    | requires 2sxc v15.04
| Dnn                 | ✅    | For v7, v8 and v9
| Oqtane 2            | ✅    | Requires v2.02
| No jQuery           | ✅    | 
| Live Demo           | ➖    |
| Install Checklist   | ✅    | See [Installation](https://azing.org/2sxc/r/y6k46oQa) on [azing.org](https://azing.org/2sxc)
| Source & License    | ✅    | included, ISC/MIT
| App Catalog         | ✅    | See [app catalog](https://2sxc.org/en/apps/app/accordion-v4-hybrid-for-dnn-and-oqtane)
| Screenshots         | ✅    | See [app catalog](https://2sxc.org/en/apps/app/accordion-v4-hybrid-for-dnn-and-oqtane)
| Best Practices      | ✅    | Uses v12.05 conventions
| Bootstrap 3         | ✅    |
| Bootstrap 4         | ✅    |
| Bootstrap 5         | ✅    |

## Customize the App

The Accordion App does not have any app settings and just a few one app resource(label) you can customize.

If you want to customize the CSS, you will usually follow the ["Create Custom Styles in a Standard 2sxc App" checklist](https://azing.org/2sxc/r/gg_aB9FD)

## History

* v.4 2021-09
    * Latest best-practices of 2sxc 12.05
    * clear/full separation of bs3/bs4
    * moved icons css to Icons folder
    * no more jQuery
* v.4.02 2022-04 
    * Bootstrap5 accordion 
    * Moved access to services to ToSic.Sxc.Services
* v.4.02.01 2022-06
    * Improvements BS3, BS4, BS5 accordion
* v.4.03.00
    * Replaced all base classes with their new sxc14 equivalents
    * Removed all GetService<> and switched to using the new ServiceKit14
    * Changed all Toolbars to use the new IToolbarService
* v.04.04.00 2023-03
    * Replaced turnOn Tag with `Kit.Page.TurnOn`
    * Removed _ from Filenames
    * Code in one file the bs5, less duplicated code