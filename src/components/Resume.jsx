import React from 'react';
import resumeImage from '../images/resume.png';
import certificateImage from '../images/certificate.png';

export default function Resume() {
  return (
    <div style={{ color: 'maroon', textAlign: 'center' }}>
      <h1 className='title has-text-centered mt-6' style={{color:'maroon'}}>Resume</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <a 
          href="https://docs.google.com/document/d/1xz5MWWkAytk1xtcgEfLj0Pt_sGCe0rsyjva_7GW9RYk/edit?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='mt-6' 
          style={{ color: 'maroon', textDecoration: 'none', marginBottom: '20px' }}
        >
          <img src={resumeImage} alt="Resume" style={{ maxWidth: '100%', width: '300px' }} />
          <div>Click here to view my Resume!</div>
        </a>
        <a 
          href='https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=3df60eb367&attid=0.1&permmsgid=msg-f:1795251872214689759&th=18ea0410edb627df&view=att&disp=inline&saddbat=ANGjdJ_BClSCzkc4cGC1_puCdRbT7ZaQXd8w_R1arFf5y8Vakak35cMy-07z57TW8CISk-W1Lm8gGt57_sXT9R-1HoKnh9xB5YCoG8Lo85ERbSvvveKEyHX4KgiWKg1XiTurPJ-a6MImefVZ-i8C-a3CbVbc-oMu4aNCJK3dwm8kv70rXWSXaNOSaaebdhlV2qi2Nb3KMBUUq55IV7o6wdvpaEnrfl3My5Eb6IUlo5j_UBJxgjoSHKOFCIs8izAnFioG11l_LiVMI68a47SgPs34QrpAa8O1bA1IvU6T8tKPC3OCww5FQXczYh1PWV_k33AB1YfnhS351o2Ed2cAzWs5weMT18jHxZQEtBPQk2kvs3KgI5AmC5Qw_rn0q_1Ix3ytPZ9WBps8PPeVSpfMNp3X07rP12WEAOFloGtJLTa8AzwdCJ2yAPTOH3RABNr5n3BVNGuOFl-K-9TKE205V2v_hQB20hWhpQiIicIsf4650gsd16102tNVPQfvaeHtDcISsBiL0JHa6OysHm7JP6iXniQ47HZMQs8GvmiQTcqXMaRe85_wjhSyRvssnzMgXKe7Ok1lRojZlxR5gY4rhlai_cW15P6jzrIdGANKDCmZHdkJhsxM9LAOGU1Wwx1Sll3wARU09PUsuexI29JblkEisvv-W0OumDrrddNqM3I1KgxLWROI3mehkOOzitkXK7izBgw3JqjOzz8sO7jBBdDnr21NInquB6vBBC0wN5HyZbG7IWn5DBBAbB_LpcxC3ZmbgY4BBGHYVqTmvvm9vd9Ow669AS_7u_9wUoal4fWbwfQJbdJq2KN2nG2PTlmuWV_welQEZYN1ZXvjuQ7RW2eHZZIfH5VvV8eWfKX9CpT5DQK1BRSYZd-HHLvHwvv3BF3dyAF8U3uJgb57-ac_-Grgu085kCUpjlhQGJV8ZdhUt0OxKXNxyi7W6P4rds2mVnCmJaoIfKsr4xs-uYZJ2Oj2P1bWtpL19Wx2gToyDLIau7YKhnH1u6jNuw_WMcs'  
          target="_blank" 
          rel="noopener noreferrer" 
          className='mt-6' 
          style={{ color: 'maroon', textDecoration: 'none' }}
        >
          <img src={certificateImage} alt="Certificate" style={{ maxWidth: '100%', width: '300px' }} />
          <div>Click here to view my Certificate!</div>
        </a>
      </div>
    </div>
  );
}
