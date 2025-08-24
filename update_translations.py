import json
import os
from collections import OrderedDict

# Define the paths
locales_dir = 'C:\\Users\\pmiet\\Documents\\projets\\nonetchat-site\\src\\locales'
fr_file_path = os.path.join(locales_dir, 'fr.json')
en_file_path = os.path.join(locales_dir, 'en.json')

# --- Load Reference Files ---
try:
    with open(fr_file_path, 'r', encoding='utf-8') as f:
        fr_data = json.load(f, object_pairs_hook=OrderedDict)
    print("Successfully loaded French reference file.")

    with open(en_file_path, 'r', encoding='utf-8') as f:
        en_data = json.load(f)
    print("Successfully loaded English fallback file.")

except Exception as e:
    print(f"Error loading reference files: {e}")
    exit()

# --- Get Target Files ---
all_files = [f for f in os.listdir(locales_dir) if f.endswith('.json')]
target_files = [f for f in all_files if f != 'fr.json'] # Update all files based on French, including English

print(f"\nFound {len(target_files)} files to synchronize with fr.json\n")

# --- Synchronization Process ---
for lang_file_name in target_files:
    file_path = os.path.join(locales_dir, lang_file_name)
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lang_data = json.load(f)

        new_lang_data = OrderedDict()
        keys_added = 0
        keys_removed_count = len(lang_data) - len(fr_data)

        # Iterate through the French keys to maintain order
        for key in fr_data.keys():
            if key in lang_data:
                new_lang_data[key] = lang_data[key]
            else:
                # If key is missing in lang file, use English value as fallback
                new_lang_data[key] = en_data.get(key, f"<{key} not found in English fallback>")
                keys_added += 1
        
        # Overwrite the file with the new ordered and synchronized data
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(new_lang_data, f, ensure_ascii=False, indent=2)
        
        if keys_added > 0:
            print(f"Synchronized {lang_file_name}: Added {keys_added} missing keys.")
        else:
            print(f"Synchronized {lang_file_name}: All keys were already present.")

    except Exception as e:
        print(f"Error processing {lang_file_name}: {e}")

print("\nTranslation synchronization complete.")
