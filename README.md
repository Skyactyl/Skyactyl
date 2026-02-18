<p align="center">  
<a href="https://skyactyl.dev/">  
<img width="1280" height="640" alt="Skyactyl Banner" src="" />  
</a>  
</p>  

# Skyactyl Panel

**Pterodactyl**, a free, open-source game server management panel built with PHP, React, and Go. Designed with security in mind, Pterodactyl runs all game servers in isolated Docker containers while exposing a beautiful and intuitive UI to end users.

Stop settling for less. Make game servers a first class citizen on your platform.

## Features

* 🌩️ **Customizable Options**: Skyactyl offers various options that let you customize the panel to your liking.  
* 🎨 **Client-side Theme Selector**: Let your clients choose between various styles according to their liking.  
* 🖥️ **Modern UI**: Skyactyl offers a modern and sleek UI that's more accessible than other modifications on the market.  
* 🌍 **Multilingual**: Skyactyl is fully translatable and can be localized to your native language.  
* 🧩 **Compatible with Blueprint Addons**: Skyactyl is fully compatible with Blueprint addons. (Requires [Blueprint for Skyactyl](https://github.com/Skyactyl/blueprint))  
* 🔌 **Compatible with Standalone Addons**: Skyactyl is fully compatible with pterodactyl-native addons.  
* 🍀 **Open Source & Free**: The first and only free frontend modifications for Pterodactyl with premium-like customizability.  

## Sponsors

I would like to extend my sincere thanks to the following sponsors for helping fund Skyactyl's development.  
[Interested in becoming a sponsor?](https://github.com/sponsors/Skyactyl)

## License

Pterodactyl® Copyright © 2015 - 2022 Dane Everitt and contributors. (Licensed under [MIT](https://github.com/Skyactyl/Skyactyl/blob/develop/PTERO_LICENSE.md))  

Skyactyl™, Copyright © 2025 Skyactyl and contributors. (Licensed under [MIT](https://github.com/Skyactyl/Skyactyl/blob/develop/LICENSE.md))  

## Cara Install Skyactyl Panel

```bash
# 1. Install Composer
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer

# 2. Buat Direktori Panel
sudo mkdir -p /var/www/pterodactyl
cd /var/www/pterodactyl

# 3. Download dan Ekstrak Panel Skyactyl
curl -Lo Skyactyl.tar.gz https://github.com/Skyactyl/Skyactyl/releases/latest/download/Skyactyl.tar.gz
tar -xzvf Skyactyl.tar.gz

# 4. Set Permission
chmod -R 755 storage/* bootstrap/cache/
