import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "nl",
    resources: {
      en: {
        translation: {
          welcome: "Welcome to our charity organization", // Add translation for the "hi" key
          home: "Who are we? We are Gambians, family, and friends of Gambians, who aim to assist family members in The Gambia and Senegal at the lowest possible shipping costs. If you want to help wish to aid Gambians and Senegalese by sending charitable goods, you have come to the right place. There are no hidden costs, no profits, and no large expenses; just mutual assistance! We typically ship an average of one container per month, with the date always announced! With more deliveries, we can increase the number of containers shipped per month. Would you like to send your goods to The Gambia quickly, efficiently, and at realistic shipping costs? Please contact us via email: charity4gambia.nl@gmail.com or by phone at +31 622832113 Charity4Gambia is an officially registered foundation for sending charitable goods. Chamber of Commerce number is 94209081",
          btn1: "Contact Us",
          btn2: "About Us",
          // about content
          heading: "About charity4Gambia",
          about:
            "At Charity4Gambia, our mission is to facilitate the efficient and affordable shipment of goods to support families and communities in The Gambia and Senegal. Founded by a group of dedicated individuals, including Gambians, family, and friends, our organization is driven by the desire to make a positive impact on the lives of those in need.",
          vision:
            "Our vision is to create a world where everyone has access to the resources they need to thrive, regardless of geographical boundaries. We envision a future where Charity4Gambia serves as a beacon of hope and support, connecting people from different parts of the world in a spirit of compassion and generosity. Through our efforts, we aim to empower individuals and communities to build brighter futures for themselves and their loved ones.",
          mission:
            " Our mission is to provide a reliable and cost-effective platform for sending charity goods to The Gambia and Senegal, ensuring that essential items reach their recipients promptly and efficiently. We strive to foster a sense of community and solidarity by facilitating the exchange of goods among individuals and organizations, all with the goal of improving the well-being of families and communities in the region.",
          missionh1: "Mission",
          visionh1: "Vision",
          // delivery section
          customernumber: "Customer Number",
          customerText:
            "To ship goods, you'll need a customer number. Simply request one by emailing us at charity4gambia.nl@gmail.com. Please include your name, address, postcode, place of residence, and mobile phone number in your email. Upon receipt, we'll promptly send you an email containing your customer number, packing list, and additional information.",
          delihollad: "Delivery in the Netherlands",
          delitext:
            " Charity4Gambia operates a warehouse in Bergeijk, North Brabant. You can deliver goods at the following times:",
          firstli: "Thursdays (every week) from 6:00 p.m. to 8:30 p.m.",
          second:
            "Saturdays in even weeks (twice a month) from 9:00 a.m. to 4:00 p.m.",
          address: "Warehouse Address:",
          addressText:
            "Enderakkers 6, 5571 CZ Bergeijk, The Netherlands. Manageable postal parcels can also be sent to this address.",
          DeliveryGuidelines: "Delivery Guidelines",
          firststep:
            "Please pack goods appropriately, avoiding excessive plastic (which is not permitted in The Gambia). Banana boxes are preferred for their durability.",
          secondstep:
            "All delivered goods must display the recipient's name, telephone number on all four 4 sides, along with the customer number.",
          thirdstep:
            "All delivered goods must display the recipient's name, telephone number on all four 4 sides, along with the customer number.",
          tradeGood: "Please note that we cannot ship commercial goods.",
          tradeheading: "Trade goods:",
          Delivering: "Delivering",
          guideLine: "Guidelines",
          // picking up good section
          pickheading: "Picking up goods",
          pickingText:
            "Once the container has arrived at the warehouse in The Gambia, the recipient will be notified to pick up the goods. Goods must be collected within 2 weeks. Upon collection, the recipient must present a valid ID and sign for receipt of the goods",
          warehouse: "Warehouse address in The Gambia",
          wareFirst: "Sukuta Jabang(roundabout)",
          wareSecond: "The Gambia",
          openHours: "Opening hours in The Gambia",
          openHourText:
            "Our opening hours are designed to accommodate everyone, including working individuals",
          firstHour: "Monday to Thursday: 10:00 a.m. – 5:00 p.m.",
          secondHour: "Fridays: 10:00 a.m. – 1:00 p.m.",
          thirdHour: "Saturdays: 10:00 a.m. – 8:00 p.m.",
          contactPerson: "Responsible contact at Charity4Gambia in The Gambia",
          //shipping costs section
          mainHeading: "Shipping costs",
          standardHeading: "Standard shipping",
          standardText:
            "Charity4Gambia strives to maintain low shipping costs to make shipping accessible for everyone. The standard shipping cost is 125 euros per cubic meter (m3).",
          shipingCostHeading: " Shipping costs for Boxes",
          shipingCostText:
            "For a normal closed banana box (25x40x50 cm, max. 20 kilos), the shipping cost is 6,25 euros!Boxes and goods of varying sizes will be measured and calculated upon delivery. You can further reduce shipping costs by ensuring compact delivery.The shipping costs are 125 euros a m3 ",
          homePicking: "Home pickup service",
          homePickingText:
            "We offer a pickup service upon consultation. When we collect goods from you, we charge you additional pickup costs. While pickup incurs additional costs, the shipping costs remain the same as for delivered goods. No hidden or increased charges!",
          paymentHeading: "Payment",
          paymentText:
            "Payment for shipping costs is due immediately upon delivery in Bergeijk or upon collection of goods. Payment can be made in cash or via bank transfer (Tikkie). Partial or deferred payments are not accepted. Goods will only be accepted upon payment of shipping costs (and any pickup costs).",
          invoiceHeading: "Invoice requirement",
          invoiceText:
            "Need an invoice for a foundation or company? No problem! Simply inform us during delivery or collection, and we will email the invoice to you",
          customHeading: "Customs declaration",
          customText:
            "Some goods require declaration to customs and must be listed on the bill of loading. Any associated costs will be passed on to you",
          fineHeading: "Fines",
          finesText:
            "Sender will be responsible for any fines incurred at customs due to shipping prohibited goods ",
          costInTheGambia: "Costs in Gambia",
          costInTheGambiaText:
            "Recipients in Gambia no longer bear any costs for relief supplies. All expenses are settled with the sender in the Netherlands through payment of shipping costs.",
          importDuty: "Import duties",
          importDutyText:
            "For goods subject to import duties (e.g., scooters/mopeds), recipients must pay the duties to the Charity4Gambia representative in Gambia before receiving the goods.",
          //terms and conditions
          termandConditionmainHeading: "Terms and conditions",
          termsConditionHeadind: " General terms and conditions ",
          termsConditionText:
            "To ensure clarity for all senders, we have established general terms and conditions that must be adhered to by every sender. It's crucial to emphasize this because by signing the packing list, you assume responsibility for the goods being shipped. Please be aware that fines will be imposed for any prohibited goods found in your boxes, and these fines are substantial. So keep in mind what is allowed and is not allowed!",
          firstCondition:
            "Fines will be imposed for any prohibited goods found in your boxes.",
          secondCondition:
            " Prohibited items include cigarettes, drugs, weapons, etc.",
          conditionParagrph:
            " If you're uncertain about whether an item can be shipped, please contact us beforehand.",
          prohibitedItemsheading: "Prohibited items",
          firstItems: "Cigarettes",
          secondItems: "Drugs",
          thirdItems: "Weapons and/or ammunition",
          fourItems: "Soft drinks/Alcoholic drinks",
          fifthItems:
            "Hazardous substances (oil, paint, batteries, fireworks, accumulators, chemicals)",
          sixItems: "Registered medication",
          sevenItems: "Batteries/batteries of electric bicycles",
          eightItems: "LED TVs",
          nineItems: "Trade goods",
          tenItems: "",
          itemsParagraph:
            " Under no circumstances may these items be offered or shipped",
          allowWithCondition: " Allowed with conditions",
          firstAllowItem:
            "Refrigerators/freezers with specific gas numbers are prohibited (R-12, R-22, R-404A, R-502 and R-507A.). If you want to ship a refrigerator, make sure that it does not contain one of these gases!",
          secondAllowItem:
            "Electrical appliances must be in working condition. The Gambia is not a dumping ground. When a device is no longer working, it is prohibited to import it into Gambia.",
          thirdAllowItem:
            "Liquids for personal use (e.g. shampoo etc.) must be properly sealed (preferably with a bag around them) to prevent leaks. You're responsible for any damage caused by leaks from your shipment and we charge you for the damage",
          fouthdAllowItem: "Auto's/ Cars",
          AllowItemParagraph:
            "You're responsible for any damage caused by leaks from your shipment.",
          packingList: "Packing list",
          packingListText:
            "When delivering or collecting your shipment, please provide a completed and signed packing list. It should always include your customer number, recipient's name and telephone number, and a detailed description of the items being sent. The sender must sign the packing list An example of a blank packing list (to fill in) can be found here: -- packing list link!",
          Bicyclesheading: "Bicycles",
          firstBicycle:
            "Bicycles are clumsy and wide to pack in the container, so they are also expensive.You can save a lot on shipping costs by making them compact: turn the handlebars a quarter turn, remove the pedals and stick them in a bag on the bicycle.If a bicycle has not been made compact, it will be calculated based on the dimensions as supplied",

          MopedScooter: "Moped/Scooter",
          scooterFirst:
            "The moped/scooter must be deregistered from RdW in the Netherlands. Make sure the papers are in order. A copy is submitted when the moped/scooter is delivered. The original has to go to Gambia. You must ensure that the original papers are in Gambia with the recipient before the container arrives!",
          scooterSecond:
            "No more fuel in the tank of the moped/scooter. The tank must be empty!",
          scooterThird:
            "Import costs for the moped/scooter must be paid by the recipient to the person responsible in Gambia for collecting the moped/scooter.",
          fourSecond:
            "Clearly state the recipient's name and telephone number on an A4 sheet of paper and stick it on the moped/scooter",
          fiveSecond: "Shipping is at your own risk",
          DimensionsWeightsPackaging: "Dimensions/Weights/Packaging",
          firstDimension:
            "Boxes must be liftable (max. 20 kilos). Does your box weigh more? Then divide the weight over 2 boxes! The boxes are stacked in the container. Take into account the weight of max. 20 kilos per box. Not only for the tax burden on the volunteers, but also to protect the goods of you and other shippers",
          secondDimension:
            "Use as many banana boxes as possible (available for free at supermarkets). These are strong and easily stackable. Preferably no moving boxes, as they are very soft when they become damp (go in a shipping container!).",
          thirdDimension:
            "Large, unwieldy or heavy boxes/crates/boxes must be delivered in such a way that a pallet truck fits underneath. This means a beam of 12 cm on both sides under the goods or on a pallet. This is included in the calculation because it also goes into the container.",
          paymentMainHeading: "Payment",
          paymentContent:
            "Shipping costs (and pick-up costs, if applicable) must be paid immediately upon delivery or collection. This can be done in cash or via bank transfer (tikkie). Partial or deferred payments are not accepted. The goods will not be accepted without payment of the shipping costs (and possibly pick-up costs).",
          shippingOnYourOwn: "Shipping at your own risk",
          shippingOnYourOwnText:
            "Sending goods is at your own risk. You may opt for insurance during shipment if desired We will load the goods into the container with care How the goods are packed/protected is your own responsibility.As it is delivered, it is packed in the container.Don't forget that the container will be in transit for 6 to 8 weeks before it arrives in Gambia. It is a shipping container, the weather can be erratic along the way, so the container will move. Make sure your goods are well protected! However, don't use too much plastic for this. This is not allowed in Gambia Charity4Gambia is not responsible for any damage caused.",
          InspectionOfGoods: "Inspection of goods",
          InspectionText:
            "Charity4Gambia  reserve the right to inspect goods/boxes for specific reasons.",
          vatTax: "VAT/Tax",
          vatText:
            "We are a tax-exempt foundation, and a 0% VAT rate applies when exporting goods outside the EU",
          containerTracker: "Container tracking",
          containerTrackerText:
            "Once the goods are loaded, you'll receive a container number for tracking.You can track the container yourself via the container number on the shipping company's website.Note that containers may not be immediately unloaded upon arrival in Gambia Sometimes it takes a while before the containers are unloaded, cleared and released.We have no influence on this. After the container arrives at the warehouse, all recipients are called to come pick up the goods.",
          //contact section
          contactHeading: "Please contact us for more details.",
          contactDetail: "Contact details",
          Netherlands: "Netherlands",
          Email: "Email",
          Gambia: "Gambia: Sukuta Jabang(roundabout)",
          WhatsApp: "WhatsApp",
          contactName: "Contact",
          senderName: "Name",
          namePlaceHolder: "Your Name",
          senderEmail: "Email",
          emailPlaceHolder: "Your Email",
          message: "Message",
          messagePlaceHolder: "Your Message",
          SendMessage: " Send message",
          getDirection: "Get direction",
          // navbar section
          navHome: "Home",
          navAbout: "About",
          navPick: "Picking up goods",
          navDelivery: "Delivery",
          navTerms: "Terms & conditions",
          navCost: "Shipping costs",
          navContact: "Contact",
          language: "Language",
          //hero section
          getIntochHeading: "Get in Touch",
          getIntochText:
            "Would you like to send your goods to The Gambia quickly,efficiently, and at realistic shipping costs? Please contact us",
          btnContact: "Contact us",
          ourPoliciesHeading: "Our Policies",
          ourPoliciesText:
            "To ensure clarity for all senders, we have established general terms and conditions that must be adhered to by every sender.",
          ourPoliciesBtn: "Terms & conditions",
          welcomeHeading: "Welcome to the charity4Gambia family",
          welcomeText:
            "We are Gambians, family, and friends of Gambians, who aim to assist family members in The Gambia and Senegal at the lowest possible shipping costs.",
          welcomeBtn: "About us",
          //navbar section
          footerAbout: "About us",
          followUs: "Follow us",
          //client section
          clientHeading: "what our clients say about us?",
          clientText:
            "We are passionate about delivering top-notch services that lead to outstanding results. Our clients' feedback is a crucial part of our growth and success. Here, we share some of their testimonials, highlighting the positive experiences and successful outcomes they’ve had with our team.",
          //rating
          containernew: "Container News",
          nextContainer: "next container June 2024",
        },
      },

      nl: {
        translation: {
          welcome: "Welkom bij onze liefdadigheidsorganisatie",
          home: "Wie zijn wij? Wij zijn Gambianen, familie en vrienden van Gambianen, en willen  tegen zo laag mogelijke verzendkosten familieleden in Gambia en Senegal helpen. Wie Gambianen en Senegalezen wil helpen door hulpgoederen te verzenden is bij ons aan het juiste adres. Geen verborgen kosten, geen winst, geen grote uitgaven, gewoon elkaar helpen! Wij verschepen gemiddeld 1 container per maand, de datum wordt altijd bekend gemaakt! Bij veel aanleveringen kunnen we meer containers per maand verschepen. Wil je snel, op nette manier, tegen reële verzendkosten je goederen verzenden naar Gambia? Neem dan contact op met ons op via email: charity4gambia.nl@gmail.com of via telefoonnummer: +31 622832113 Charity4Gambia is een officieel geregistreerde stichting voor verzenden van hulpgoederen KvK-nummer: 94209081",
          btn1: "Contact met ons ",
          btn2: "Wie zijn wij?",
          // about content
          heading: "Welkom bij Charity4Gambia",
          about:
            "Bij Charity4Gambia zetten we, met vrijwilligers, ons in om een positieve impact te hebben op het leven van gezinnen en families  in Gambia en Senegal. Onze missie is om een efficiënte en betaalbare verzending van goederen aan te bieden, gedreven door mededogen en solidariteit. ",
          vision:
            "We stellen ons een wereld voor waarin iedereen toegang heeft tot middelen die ze nodig hebben om te gedijen, ongeacht geografische grenzen. Charity4Gambia wil Gambianen en Senegalezen tot steun zijn en mensen wereldwijd verbinden.",
          mission:
            " Onze missie is om een betrouwbaar en kosteneffectief platform te bieden voor het verzenden van liefdadigheids en hulpgoederen naar Gambia en Senegal. We streven ernaar deze goederen zo snel en goed mogelijk bij de ontvangers te laten aankomen, waarbij we de gemeenschap en solidariteit bevorderen.",
          missionh1: "Onze missie ",
          visionh1: "Onze visie",
          customernumber: "Klantnummer ",
          customerText:
            " Om goederen te kunnen verzenden heeft u een klantnummer nodig. Een klantnummer kunt u aanvragen door een email te sturen naar: charity4gambia.nl@gmail.com. Wij vragen u om uw naam, adres, postcode, woonplaats, gsm-nummer door te geven via de e-mail. Na ontvangst sturen wij u een e-mail met klantnummer, paklijst en informatie.",
          delihollad: "Aanleveren in Nederland",
          delitext:
            "Charity4Gambia heeft een magazijn/loods in Bergeijk (Noord-Brabant). U kunt goederen aanleveren: ",
          firstli: "Donderdag (elke week) van 18.00 tot 20.30 uur",
          second:
            "Zaterdag in de even weken (dus 2x per maand) 	van 9.00 tot 16.00 uur",
          address: "Adres magazijn/loods",
          addressText:
            "Enderakkers 6, 5571 CZ Bergeijk, Nederland. Dit adres is tevens een postadres.",
          DeliveryGuidelines: "Wijze van aanleveren",
          firststep:
            "Goederen goed verpakken – niet te veel plastic (is niet toegestaan in Gambia) Bij voorkeur aanleveren in bananendozen (deze zijn het sterkst). ",
          secondstep:
            "Goederen die worden aangeleverd, moeten aan 4 zijden voorzien zijn van naam en het telefoonnummer van de ontvanger, alsmede het klantnummer. ",
          thirdstep:
            "Bij het afleveren van de goederen is een ingevulde paklijst verplicht. ",
          tradeGood: "Wij kunnen geen handelsgoederen verzenden.",
          tradeheading: "Handelsgoederen",
          Delivering: "Aanleveren",
          guideLine: "Richtlijnen",
          // picking up good section
          pickheading: "Ophalen goederen Gambia",
          pickingText:
            "Nadat de container is gearriveerd in het magazijn in Gambia wordt de ontvanger gebeld om de goederen op te komen halen. De ontvanger kan binnen 2 weken de goederen ophalen in het magazijn. Bij het ophalen van de goederen dient de ontvanger zich te legitimeren met een geldig ID en tekent de ontvanger voor ontvangst van de goederen.",
          warehouse: "Adres magazijn/loods Gambia",
          wareFirst: "Sukuta Jabang(roundabout)",
          wareSecond: "The Gambia",
          openHours: "Openingstijden in Gambia",
          openHourText:
            "De openingstijden zijn ruim (ook voor werkende mensen!)",
          firstHour: "Maandag t/m donderdag 	10.00 – 17.00 uur",
          secondHour: "Vrijdag				10.00 – 13.00 uur",
          thirdHour: "Zaterdag			10.00 – 20.00 uur ",
          contactPerson: "Verantwoordelijke Charity4Gambia in Gambia",
          //shipping costs section
          mainHeading: "Verzendkosten",
          standardHeading: "Verzendkosten",
          standardText:
            "Charity4Gambia houdt de kosten laag zodat verzenden voor iedereen mogelijk is. De verzendkosten bedragen 125 euro per m3.",
          shipingCostHeading: "Verzendkosten voor Dozen",
          shipingCostText:
            "Voor een normaal gesloten bananendoos (25x40x50 cm, max. 20 kilo) is dit 6,25 euro! dozen en goederen met afwijkende maten zullen worden opgemeten en berekend bij aflevering van uw goederen. U kunt zelf ook de verzendkosten laag te houden door compact aan te leveren! de verzendkosten bedragen 125  euro per m3.",
          homePicking: "Thuis ophalen van goederen",
          homePickingText:
            "In overleg kunnen we goederen bij u ophalen. Wanneer we goederen ophalen bij u, berekenen we ophaalkosten, maar de verzendkosten van de goederen blijven te allen tijde gelijk aan de verzendkosten van de aangeleverde goederen. Geen verborgen kosten, geen verhoogde verzendkosten.",
          paymentHeading: "Betaling",
          paymentText:
            "Betaling van verzendkosten dient direct te gebeuren bij aflevering in Bergeijk of bij ophaal van de goederen. Dit kan contant of via een bankoverboeking (tikkie).    Deelbetalingen of uitgestelde betalingen zijn niet toegestaan. Zonder betaling van de verzendkosten (en evt. ophaalkosten) worden de goederen niet in ontvangst genomen.",
          invoiceHeading: "Factuur nodig?",
          invoiceText:
            "Heeft u een factuur nodig voor een stichting of bedrijf? Geen probleem, deze sturen wij u per e-mail na. U kunt dat aangeven bij aflevering of ophaal van de goederen.",
          customHeading: "Douane aangifte",
          customText:
            "Er zijn goederen welke wij bij de douane bekend moeten maken, ze moeten op de zgn. “bill of loading”. Wanneer wij hiervoor kosten verschuldigd zijn aan de transporteur worden deze kosten aan u worden doorberekend.",
          fineHeading: "Boetes",
          finesText:
            "Heeft u goederen verzonden welke niet zijn toegestaan (zie voorwaarden) en ontstaat daar een boete uit bij de douane, dan komen deze kosten voor rekening van de verzender. ",
          costInTheGambia: "Kosten in Gambia",
          costInTheGambiaText:
            "Alle kosten worden in Nederland afgerekend met de verzender door het betalen van de verzendkosten.",
          importDuty: "Invoerrechten",
          importDutyText:
            "Voor goederen waarvoor invoerrechten worden gerekend (bijv. scooters/brommers) moet de ontvanger de kosten van invoerrechten voldoen in Gambia bij de verantwoordelijke van Charity4Gambia alvorens de ontvanger de goederen in ontvangst kan nemen. ",
          //terms and conditions
          termandConditionmainHeading: "ALGEMENE VOORWAARDEN",
          termsConditionHeadind: "Algemene voorwaarden ",
          termsConditionText:
            "Om voor iedereen het duidelijk te houden hebben we algemene voorwaarden opgesteld waar iedere verzender zich aan moet houden.  Helaas is het nodig om dit zeer duidelijk te benadrukken. Omdat u zelf op de paklijst ondertekent, bent u verantwoordelijk voor de te verzenden goederen. Wanneer er goederen in uw dozen zitten welke NIET zijn toegestaan te verzenden komen er boetes. Deze boetes zijn niet mild, ben daarvoor gewaarschuwd. Deze boetes komen voor rekening van de verzender. Houdt er dus goed rekening mee met wat wel of niet is toegestaan.",
          firstCondition:
            "Er worden boetes opgelegd voor verboden goederen die in uw zending worden aangetroffen.",
          secondCondition:
            "Verboden voorwerpen zijn onder meer sigaretten, drugs, wapens, enz.",
          conditionParagrph:
            "Als u niet zeker weet of een artikel verzonden kan worden, neem dan vooraf contact met ons op. ",
          prohibitedItemsheading: "Wat is NIET toegestaan?",
          firstItems: "Sigaretten",
          secondItems: "Drugs",
          thirdItems: "Wapens en/of munitie",
          fourItems: "Frisdranken/alcoholische dranken",
          fifthItems:
            "Gevaarlijke stoffen (olie, verf, batterijen, vuurwerk, accu's, chemicaliën)",
          sixItems: "Geregistreerde medicatie",
          sevenItems: "Accu’s/batterijen van elektrische fietsen",
          eightItems: "LED Tv’s",
          nineItems: "Handelsgoederen",
          tenItems: "",
          itemsParagraph:
            "Deze goederen mogen onder geen beding worden aangeboden en verzonden worden! Indien u twijfelt of u iets mag versturen, neem dan vooraf contact met ons op. ",
          allowWithCondition: "Toegestaan ​​onder voorwaarden.",
          firstAllowItem:
            "Koelkasten/diepvriezers met de volgende gasnummers zijn verboden te verzenden:R-12, R-22, R-404A, R-502 en R-507A. Wanneer u een koelkast wilt verzenden let dan goed op dat er niet 1 van deze gassen in zit. ",
          secondAllowItem:
            "Elektrische apparaten: deze moeten werkend zijn. Gambia is geen afvalput. Wanneer een apparaat niet meer werkend is, is het verboden deze te importeren in Gambia. ",
          thirdAllowItem:
            "Vloeistoffen voor eigen gebruik (bijv. shampoo etc.). Zorg er wel voor dat deze goed zijn afgeplakt (het liefst met een zakje eromheen) om lekken te voorkomen. Lekt er een verpakking uit uw zending dan bent u verantwoordelijk voor de ontstane schade aan andere verpakkingen en zullen we de schade aan u doorberekenen.",
          fouthdAllowItem: "Auto's/ Cars",
          AllowItemParagraph:
            "U bent verantwoordelijk voor eventuele schade veroorzaakt door lekkage uit uw zending.",
          packingList: "Paklijst",
          packingListText:
            "Bij het afleveren/ophalen van uw zending levert u een ingevulde, ondertekende paklijst in. Een paklijst is altijd voorzien van uw klantnummer, naam en telefoonnummer van de ontvanger, opgave van hetgeen wordt aangeleverd/verstuurd. Een paklijst wordt altijd ondertekend door de verzender van de goederen. Een voorbeeld van een blanco paklijst (om in te vullen) treft u hier aan.",
          Bicyclesheading: "Fiets",
          firstBicycle:
            "Fietsen zijn onhandig en breed om te pakken in de container, dus ook duur. U kunt veel op de verzendkosten besparen door ze compact te maken: stuur kwartslag draaien, trappers demonteren en in een zakje aan de fiets te plakken. Is een fiets niet compact gemaakt dan wordt het berekend op basis van de maten zoals aangeleverd.",

          MopedScooter: "Bromfiets/Scooter",
          scooterFirst:
            "De bromfiets/scooter moet in Nederland zijn afgemeld bij de RdW. Zorg ervoor dat de papieren in orde zijn. Bij aflevering van de bromfiets/scooter wordt een kopie overhandigd. Het origineel moet naar Gambia. U dient ervoor te zorgen dat de originele papieren in Gambia bij de ontvanger zijn voordat de container arriveert.",
          scooterSecond:
            "Geen brandstof meer in de tank van de bromfiets/scooter. De tank moet leeg zijn!",
          scooterThird:
            "Invoerkosten voor de bromfiets/scooter dienen door de ontvanger te worden betaald aan de persoon die in Gambia verantwoordelijk is voor het ophalen van de bromfiets/scooter.",
          fourSecond:
            "Vermeld duidelijk de naam en het telefoonnummer van de ontvanger op een A4-tje en plak dit op de bromfiets/scooter.",
          fiveSecond: "Het verzenden is op eigen risico.",
          DimensionsWeightsPackaging: "Afmetingen/gewichten/verpakken goederen",
          firstDimension:
            "Dozen moeten tilbaar zijn (max. 20 kilo) Weegt uw doos meer? Verdeel het gewicht dan over 2 dozen! In de container worden de dozen gestapeld. Houdt rekening met het gewicht van max. 20 kilo per doos. Niet alleen voor de belasting bij de vrijwilligers, maar ook om de goederen van u en andere verzenders te beschermen.",
          secondDimension:
            "Gebruik zoveel mogelijk bananendozen (gratis verkrijgbaar bij supermarkten). Deze zijn sterk en goed stapelbaar. Bij voorkeur geen verhuisdozen, deze zijn erg slap wanneer ze vochtig worden (gaan in een zeecontainer!). ",
          thirdDimension:
            "Grote, onhandelbare of zware kisten/kratten/dozen moet zo worden aangeleverd dat er een pompwagen onder past. Dit betekent onder de goederen een balkje van 12 cm aan beide kanten of op een pallet. Deze wordt mee berekend want gaat ook mee de container in. ",
          paymentMainHeading:
            "Betalen van verzendkosten (en evt. ophaalkosten).",
          paymentContent:
            "Betaling van verzendkosten dient direct te gebeuren bij aflevering in Bergeijk of bij ophaal van de goederen. Dit kan contant of via een bankoverboeking (tikkie).      Deelbetalingen of uitgestelde betalingen zijn niet toegestaan! Zonder betaling van de verzendkosten (en evt. ophaalkosten) worden de goederen niet in ontvangst genomen. ",
          shippingOnYourOwn: "Verzenden op eigen risico",
          shippingOnYourOwnText:
            "Het verzenden van goederen is te allen tijde op eigen risico. U kunt desgewenst zelf een verzekering afsluiten voor uw goederen tijdens verzending. Wij zullen met zorgvuldigheid de goederen in de container laden. Hoe de goederen verpakt/beschermd zijn is uw eigen verantwoordelijkheid. Zoals het wordt aangeleverd zo wordt het gepakt in de container. Vergeet hierbij niet dat de container 6 tot 8 weken onderweg is voordat hij in Gambia arriveert. Het is een zeecontainer, het weer kan grillig zijn onderweg, dus de container zal bewegen. Zorg dat uw goederen goed beschermd zijn! Gebruik echter niet al te veel plastic hiervoor. Dit is niet toegestaan in Gambia! Charity4Gambia is niet verantwoordelijk voor eventuele ontstane schade. ",
          InspectionOfGoods: "Controle goederen bij gerichte aanleiding",
          InspectionText:
            "Charity4Gambia behoudt zich het recht de goederen/dozen te controleren bij gerichte aanleiding. ",
          vatTax: "B.T.W. – belasting",
          vatText:
            "Wij zijn een stichting welke niet belastingplichtig is. Daarnaast geldt bij export van goederen naar een land buiten de EU het 0% btw-tarief.",
          containerTracker: "Container volgen",
          containerTrackerText:
            "Zijn de goederen geladen dan wordt een containernummer doorgegeven aan u. U kunt de container zelf volgen via het containernummer op de website van de rederij. Houdt er rekening mee dat het schip niet direct wordt afgeladen in Gambia. Soms duurt het even voordat de containers worden afgeladen, ingeklaard en zijn vrijgegeven.   Wij hebben hier geen invloed op. Na het arriveren van de container in het magazijn worden alle ontvangers gebeld om de goederen te komen halen. ",
          //contact section
          contactHeading: "Meer weten? Neem contact met ons op.",
          contactDetail: "Contact details",
          Netherlands: "Nederland",
          Email: "E-mail",
          Gambia: "Gambia: Sukuta Jabang(roundabout)",
          WhatsApp: "WhatsApp",
          contactName: "Contact",
          senderName: "Naam",
          namePlaceHolder: "jouw naam",
          senderEmail: "E-mail",
          emailPlaceHolder: "Jouw email",
          message: "Bericht",
          messagePlaceHolder: "Jouw bericht",
          SendMessage: "Bericht versturen ",
          getDirection: "Get direction",
          // navbar section
          navHome: "Home",
          navAbout: "Welkom",
          navPick: "Ophalen goederen Gambia",
          navDelivery: "Levering",
          navTerms: "Algemene voorwaarden",

          navContact: "Contact",
          navCost: "Kosten verzenden",
          language: "Taal",
          //hero section
          getIntochHeading: "Contact",
          getIntochText:
            "Wil je snel, op nette manier, tegen reële verzendkosten je goederen verzenden naar Gambia? Neem dan contact op met ons op.",
          btnContact: "Contact met ons",
          ourPoliciesHeading: "Onze voorwaarden",
          ourPoliciesText:
            "Om voor iedereen het duidelijk te houden hebben we algemene voorwaarden opgesteld waar iedere verzender zich aan moet houden. ",
          ourPoliciesBtn: "Algemene Voorwaarden",
          welcomeHeading: "Welkom bij Charity4Gambia ",
          welcomeText:
            "Wij zij Gambianen en vrienden van Gambianen. We willen  tegen zo laag mogelijke verzendkosten families en vrienden in Gambia en Senegal helpen.",
          welcomeBtn: "Wie zijn wij?",
          //navbar section
          footerAbout: "Wie zijn wij?",
          followUs: "Volg ons",
          //client section
          clientHeading: "Wat zeggen onze klanten?",
          clientText:
            "We zijn gepassioneerd over het leveren van eersteklas diensten die leiden tot uitstekende resultaten. De feedback van onze klanten is een cruciaal onderdeel van onze groei en succes. Hier delen we enkele van hun testimonials, waarin de positieve ervaringen en succesvolle resultaten die ze met ons team hebben gehad, worden belicht.",
          //rating news
          nextContainer: "volgende container juni 2024",
        },
      },
    },
  });
