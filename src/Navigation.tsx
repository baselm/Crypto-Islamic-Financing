import { Toolbar, Typography } from '@material-ui/core';
import DisconnectIcon from '@material-ui/icons/LinkOff';
import Button from '@mui/material/Button';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-material-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import React, { FC } from 'react';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
const Navigation: FC = () => {
    const { wallet } = useWallet();

    return (
        <Toolbar style={{ display: 'flex' }}>
            <Typography component="h1" variant="h6" style={{ flexGrow: 1 }}>
                CashMe Jordanian Dinar Digital Currency  JODC 
            </Typography>

            <WalletMultiButton />
            {wallet && <WalletDisconnectButton startIcon={<DisconnectIcon />} style={{ marginLeft: 8 }} />}
        
        <Button 
        variant="contained" 
        starticon = "NetworkCheckIcon"
        size="large"
        >
        Network 
      </Button>

        </Toolbar>
    );
};

export default Navigation;
