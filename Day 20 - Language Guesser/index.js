import { franc } from 'franc';
import langs from 'langs';

const input = process.argv[2];
const langCode = franc(input)

if(langCode==='und'){
    console.log('Sorry, We Could not Detect the Language');
} else{
    const language = langs.where("3", langCode);
    if(language){
        console.log(`Our best guess is: ${language.name}`);
    } else{
        console.log(`SORRY, COULDN'T FIND A LANGUAGE FOR CODE: ${langCode}`);
    }   
}
