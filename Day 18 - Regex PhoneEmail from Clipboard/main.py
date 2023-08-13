import re
import pyperclip

phoneNumRegex = re.compile(r'\d{3}-\d{3}-\d{3}',re.VERBOSE)
emailRegex = re.compile(r'''
[a-zA-Z0-9_.+]+ #Start
@               #@
[a-zA-Z0-9_.+]+ #Domain                      
''',re.VERBOSE)

text = pyperclip.paste()

extractedPhone = phoneNumRegex.findall(text)
extractedEmail = emailRegex.findall(text)

print(extractedPhone)
print(extractedEmail)