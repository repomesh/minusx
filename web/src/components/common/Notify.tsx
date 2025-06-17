import { Alert, AlertIcon, AlertTitle, AlertDescription, Box, VStack, HStack } from '@chakra-ui/react';
import React from 'react'

interface NotifyProps {
  children?: React.ReactNode;
}

export const Notify = ({ children }: NotifyProps) => {
  return (
    <Box p={0}>
      <Alert status="info" variant="left-accent" borderRadius="md">
        
        <VStack align="flex-start" spacing={1}>
            <HStack>
                <AlertIcon />
                <AlertTitle fontSize="md" fontWeight="bold">Heads Up!</AlertTitle>
            </HStack>            
          <AlertDescription fontSize="xs">
            {children && <Box>{children}</Box>}
          </AlertDescription>
        </VStack>
      </Alert>
    </Box>
  );
};