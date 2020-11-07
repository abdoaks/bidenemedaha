const Discord = require('discord.js');
exports.run = (client, message, args) => {
 
  let pages = [
              '**Bot Hakkında Kısa Bilgi**\n\n\n ' + ' `g!`yardım = yazarak komutları göre bilirsiniz \n``g!`` bilgi = Botun yükleme hızı gibi bilgilerini gösterir.  \n``g!`` ping = Botun Pingini Gösterir. \n``g!``  istatistik = Botun İstatistiklerini Gösterir.  \n  `g!davet` Komutu ile botu sunucunuza davet edebilirsiniz. \n  `NOT:` Eğer diğer yardım sayfasına geçerken önceki sayfada tıkladığınız tepki silnmez ise emojiye 2 kez tıklayın.  ',
              '**Yetkili Komutları**\n\n ' + '**`g!`ses-kanal-aç = Yazdığınız isimde ses kanalı açar **\n **`g!`çekiliş = Sunucunuzda Çekiliş Yaparsınız (YAKINDA)** \n **`g!`yazı-kanal-aç = Yazdığınız isimde yazı kanalı açar ** \n **`g!`öneri = Botun yapımcısına bot ile ilgili öneri sunarsınız **  \n **`g!`temizle = Belirtilen miktarda mesaj siler (Not:En fazla 100 mesaj silebilir) **\n **`g!`yasakla = Etiketlediğiniz kişiyi sunucudan yasaklar ** \n **`g!`emoji-yükle = Emoji yüklersiniz ** \n **`g!`reklam-taraması= Sunucuda reklam yapan kişileri bulur ve size gösteririr ** \n **`g!`rol-bilgi = Etiketlediğiniz Rol Hakkında Bilgi Verir\n **`g!`duyuru = Duyuru yaparsınız**  \n **`g!`alıntıla = Idsini yazdığınız mesajı alıntılar  \n ',
              '**Eğlence Ve Bilgi Komutları**\n\n\n' + '**`g!`düello = etiketlediğiniz kişi ile düello atarsınız** \n **`g!`oyun-ara = Yazdığınız oyunu steamde arar** \n **`g!`havadurumu = Yazdığınız yerleşim biriminin hava durumunu gösterir.** \n **`g!`spotify = Etiketlediğiniz kullanıcının dinlediği şarkı hakkında bilgi alırsınız** \n **`g!`rastgeleşifre = Şifre Oluşturur** \n **`g!`youtube = Yazdığınız başlığı youtubede arar ve bilgilerini size gönderir ** \n **`g!`espri = Bot size espri yapar** \n **`g!`yemek-ye = Yemek yersiniz** \n **`g!`öp = Etiketlediğiniz kişiyi öpersiniz** \n**`g!`fıkra = Bot size fıkra anlatır**  ',
              '**Çerçeve Ve Profil Komutları**\n\n\n ' + '``g!``bulanık = Profilinize bulanık efekti Verir.\n``g!``wasted = Profilinize wasted efekti Verir.\n `g!`bjk = Beşiktaşlıysanız yazın  \n `g!`gs = Galatasaraylıysanız yazın  \n `g!`fb = Fenerbahçeliyseniz yazın yazın \n `g!`kralol = Kral olursunuz \n `g!`pp = Etiketlidiğiniz kişinin profil resmini gösterir \n `g!`m-logo = Müzik temalı logo oluşturur \n `g!`skull-logo = Kuru kafa temalı logo oluşturur \n `g!`kalp-logo = Kalp temalı logo oluşturur',
              ];
  let page = 1;
 
  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
     .addField("**Beni Sunucuna Davet Etmek İçin**", " [Tıkla](https://discord.com/oauth2/authorize?client_id=748600559417950229&scope=bot&permissions=805829694)" )
      .addField("**Web Sitemize Gitmek İçin **", " [Tıkla](https://lewix-bilgi.glitch.me/)" )
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {
 
  msg.react('⬅')
  .then(r => {
    msg.react('➡')
 
      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });
 
      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
 
    })
  })
};

 
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h",],
permLevel: 0
};
 
exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};
//lewix bot by Lewỉx#1881