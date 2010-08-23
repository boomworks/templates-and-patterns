@echo off
REM Deployment preperation script

REM setup date & time vars
for /f "tokens=1-4 delims=/ " %%a in ('date /t') do (set date=%%d%%c%%b)
for /f "tokens=1-2 delims=: " %%a in ('time /t') do (set time=%%a%%b%)

REM SVN export
svn export trunk "dist/%date%-%time%"
cd "dist/%date%-%time%/"

REM Compress JS & CSS
java -jar "C:\Program Files\yuicompressor-2.4.2\build\yuicompressor-2.4.2.jar" js/*.js -o js/*.js
java -jar "C:\Program Files\yuicompressor-2.4.2\build\yuicompressor-2.4.2.jar" css/*.css -o css/*.css

REM Optimise PNG images
pngcrush -brute -d images/crushed images/*.png
mv -f images/crushed/*.png images
rm -rf images/crushed

cd ../../
