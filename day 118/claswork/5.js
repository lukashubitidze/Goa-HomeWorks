function makeMessage(message) {
    // პარამეტრი "message" იქცევა როგორც ლოკალური ცვლადი შიდა ფუნქციისთვის
    return function() {
        console.log("შეტყობინება: " + message);
    };
}

// შეგვიძლია შევქმნათ სხვადასხვა შეტყობინების ფუნქციები
const alertMessage = makeMessage("სისტემური შეცდომა!");
const successMessage = makeMessage("ოპერაცია წარმატებით დასრულდა!");

alertMessage();   // დაბეჭდავს: შეტყობინება: სისტემური შეცდომა!
successMessage(); // დაბეჭდავს: შეტყობინება: ოპერაცია წარმატებით დასრულდა!