import re
import os
import urllib.request

css_file = 'public/fonts/fonts.css'
output_dir = 'public/fonts'

with open(css_file, 'r') as f:
    css_content = f.read()

# Regex to find URLs
urls = re.findall(r'url\((https://fonts.gstatic.com/s/[^)]+)\)', css_content)

new_css_content = css_content

print(f"Found {len(urls)} fonts to download.")

opener = urllib.request.build_opener()
opener.addheaders = [('User-Agent', 'Mozilla/5.0')]
urllib.request.install_opener(opener)

for url in urls:
    filename = url.split('/')[-1]
    local_path = os.path.join(output_dir, filename)
    
    # Download if not exists
    if not os.path.exists(local_path):
        print(f"Downloading {filename}...")
        try:
            urllib.request.urlretrieve(url, local_path)
        except Exception as e:
            print(f"Error downloading {url}: {e}")
    else:
        print(f"Skipping {filename} (already exists)")

    # Replace URL in CSS content
    new_css_content = new_css_content.replace(url, f'/fonts/{filename}')

# Write new CSS file
with open('public/fonts/local-fonts.css', 'w') as f:
    f.write(new_css_content)

print("Finished downloading and creating local-fonts.css")
